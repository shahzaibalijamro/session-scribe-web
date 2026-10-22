// Queue management for API requests
class ProcessingQueue {
  constructor() {
    this.transcriptionQueue = [];
    this.aiProcessingQueue = [];
    this.isProcessingTranscription = false;
    this.isProcessingAI = false;
    this.maxConcurrentTranscriptions = 2;
    this.maxConcurrentAI = 1;
    this.activeTranscriptions = 0;
    this.activeAI = 0;
  }

  async addTranscriptionJob(userId, chunkPaths, options = {}) {
    return new Promise((resolve, reject) => {
      const job = {
        userId,
        chunkPaths,
        options,
        resolve,
        reject,
        timestamp: Date.now()
      };
      
      this.transcriptionQueue.push(job);
      console.log(`📋 Added transcription job for user ${userId}. Queue length: ${this.transcriptionQueue.length}`);
      
      this.processTranscriptionQueue();
    });
  }

  async addAIProcessingJob(userId, transcription, type) {
    return new Promise((resolve, reject) => {
      const job = {
        userId,
        transcription,
        type,
        resolve,
        reject,
        timestamp: Date.now()
      };
      
      this.aiProcessingQueue.push(job);
      console.log(`🧠 Added AI processing job for user ${userId}. Queue length: ${this.aiProcessingQueue.length}`);
      
      this.processAIQueue();
    });
  }

  async processTranscriptionQueue() {
    if (this.activeTranscriptions >= this.maxConcurrentTranscriptions || this.transcriptionQueue.length === 0) {
      return;
    }

    const job = this.transcriptionQueue.shift();
    this.activeTranscriptions++;

    console.log(`🎙️ Processing transcription for user ${job.userId}. Active: ${this.activeTranscriptions}`);

    try {
      const result = await this.executeTranscription(job);
      job.resolve(result);
    } catch (error) {
      console.error(`❌ Transcription failed for user ${job.userId}:`, error);
      job.reject(error);
    } finally {
      this.activeTranscriptions--;
      // Process next job after a small delay
      setTimeout(() => this.processTranscriptionQueue(), 500);
    }
  }

  async processAIQueue() {
    if (this.activeAI >= this.maxConcurrentAI || this.aiProcessingQueue.length === 0) {
      return;
    }

    const job = this.aiProcessingQueue.shift();
    this.activeAI++;

    console.log(`🧠 Processing AI job for user ${job.userId}. Queue length: ${this.aiProcessingQueue.length}`);

    try {
      const result = await this.executeAIProcessing(job);
      job.resolve(result);
    } catch (error) {
      console.error(`❌ AI processing failed for user ${job.userId}:`, error);
      job.reject(error);
    } finally {
      this.activeAI--;
      // Process next job after a small delay to avoid rate limits
      setTimeout(() => this.processAIQueue(), 1000);
    }
  }

  async executeTranscription(job) {
    const { userId, chunkPaths, options } = job;
    
    // Enhanced transcription with user-specific logging
    console.log(`🎙️ [User ${userId}] Starting transcription of ${chunkPaths.length} chunks`);
    
    const transcripts = new Array(chunkPaths.length).fill(null);
    const failedChunks = [];

    // Process chunks with controlled concurrency
    for (let i = 0; i < chunkPaths.length; i++) {
      try {
        console.log(`🎙️ [User ${userId}] Transcribing chunk ${i + 1}/${chunkPaths.length}`);
        
        const transcript = await this.transcribeChunkWithRetry(chunkPaths[i], i, userId);
        transcripts[i] = transcript;
        
        // Small delay between chunks to be respectful to API
        if (i < chunkPaths.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      } catch (error) {
        console.error(`❌ [User ${userId}] Chunk ${i + 1} failed:`, error);
        failedChunks.push({ index: i, error: error.message });
        
        if (options.allowPartialFailure) {
          transcripts[i] = `[Transcription failed for segment ${i + 1}]`;
        } else {
          throw error;
        }
      }
    }

    const validTranscripts = transcripts.filter(t => t !== null);
    if (validTranscripts.length === 0) {
      throw new Error("All transcription attempts failed");
    }

    console.log(`✅ [User ${userId}] Transcription completed: ${validTranscripts.length}/${chunkPaths.length} successful`);
    return validTranscripts.join(" ");
  }

  async executeAIProcessing(job) {
    const { userId, transcription, type } = job;
    
    console.log(`🧠 [User ${userId}] Starting ${type} processing`);
    
    switch (type) {
      case 'format':
        return await formatTranscriptWithSpeakers(transcription);
      case 'extract_main':
        return await extractMainMeetingData(transcription);
      case 'extract_minutes':
        return await extractMinutesAndNextSteps(transcription);
      default:
        throw new Error(`Unknown AI processing type: ${type}`);
    }
  }

  async transcribeChunkWithRetry(chunkPath, chunkIndex, userId, maxRetries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🎙️ [User ${userId}] Chunk ${chunkIndex + 1}, attempt ${attempt}/${maxRetries}`);

        const transcription = await openaiOriginal.audio.transcriptions.create({
          file: fs.createReadStream(chunkPath),
          model: "whisper-1",
          response_format: "text",
        });

        console.log(`✅ [User ${userId}] Chunk ${chunkIndex + 1} completed on attempt ${attempt}`);
        return transcription.trim();
      } catch (error) {
        lastError = error;
        console.error(`❌ [User ${userId}] Attempt ${attempt} failed for chunk ${chunkIndex + 1}:`, error.message);

        if (attempt < maxRetries) {
          const delay = 1000 * Math.pow(2, attempt - 1) + Math.random() * 1000;
          console.log(`⏳ [User ${userId}] Waiting ${Math.round(delay)}ms before retry...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError;
  }

  getQueueStatus() {
    return {
      transcriptionQueue: this.transcriptionQueue.length,
      aiProcessingQueue: this.aiProcessingQueue.length,
      activeTranscriptions: this.activeTranscriptions,
      activeAI: this.activeAI
    };
  }
}

// Create global queue instance
const processingQueue = new ProcessingQueue();

// Export for use in controllers
export { processingQueue };