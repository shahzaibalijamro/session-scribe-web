// import fs from "fs";
// import path from "path";
// import ffmpeg from "fluent-ffmpeg";
// import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
// import ffprobeInstaller from "@ffprobe-installer/ffprobe";
// import { openaiOriginal } from "../index.js";
// import meetingSchema from "../models/meeting.model.js";
// import { parseDueDate } from '../services/dateParser.js';
// import {
//   extractComprehensiveMeetingData,
//   extractMainMeetingData,
//   extractMinutesAndNextSteps,
//   formatTranscriptWithSpeakers,
//   analyzeDiscussionTopics
// } from "../prompts.js";
// import { uploadToS3 } from "../utils.js";
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { s3Client } from "../index.js";
// import User from "../models/user.model.js";
// import historyModel from "../models/history.model.js";
// import { sendTaskReminderEmail } from "../services/emailService.js";

// ffmpeg.setFfmpegPath(ffmpegInstaller.path);
// ffmpeg.setFfprobePath(ffprobeInstaller.path);

// /**
//  * Sleep/delay utility function
//  */
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// /**
//  * Create user-specific session directory
//  */
// const createUserSession = (userId) => {
//   const sessionId = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
//   const userTempDir = path.join("uploads", "sessions", userId.toString(), sessionId);

//   try {
//     fs.mkdirSync(userTempDir, { recursive: true });
//     console.log(`📁 [User ${userId}] Created session directory: ${sessionId}`);

//     return {
//       sessionId,
//       userTempDir,
//       cleanup: () => {
//         try {
//           if (fs.existsSync(userTempDir)) {
//             fs.rmSync(userTempDir, { recursive: true, force: true });
//             console.log(`🗑️ [User ${userId}] Session ${sessionId} cleaned up`);
//           }
//         } catch (error) {
//           console.error(`❌ [User ${userId}] Failed to cleanup session ${sessionId}:`, error);
//         }
//       }
//     };
//   } catch (error) {
//     console.error(`❌ [User ${userId}] Failed to create session directory:`, error);
//     throw new Error('Failed to create processing session');
//   }
// };

// /**
//  * Enhanced transcription with retry and graceful failure handling
//  */
// const transcribeChunkWithRetry = async (chunkPath, chunkIndex, userId, sessionId, maxRetries = 3, baseDelay = 1000) => {
//   let lastError;

//   for (let attempt = 1; attempt <= maxRetries; attempt++) {
//     try {
//       console.log(`🎙️ [User ${userId}][Session ${sessionId}] Transcribing chunk ${chunkIndex + 1}, attempt ${attempt}/${maxRetries}...`);

//       const transcription = await openaiOriginal.audio.transcriptions.create({
//         file: fs.createReadStream(chunkPath),
//         model: "whisper-1",
//         response_format: "text",
//       });
//       console.log(`✅ [User ${userId}][Session ${sessionId}] Chunk ${chunkIndex + 1} completed on attempt ${attempt}`);
//       return {
//         success: true,
//         transcript: transcription.trim(),
//         chunkIndex,
//         error: null
//       };
//     } catch (error) {
//       lastError = error;
//       console.error(`❌ [User ${userId}][Session ${sessionId}] Attempt ${attempt} failed for chunk ${chunkIndex + 1}:`, error.message);

//       if (attempt < maxRetries) {
//         const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000;
//         console.log(`⏳ [User ${userId}][Session ${sessionId}] Waiting ${Math.round(delay)}ms before retry...`);
//         await sleep(delay);
//       }
//     }
//   }

//   console.error(`🔥 [User ${userId}][Session ${sessionId}] All ${maxRetries} attempts failed for chunk ${chunkIndex + 1}`);
//   return {
//     success: false,
//     transcript: `[Transcription failed for segment ${chunkIndex + 1}: ${lastError.message}]`,
//     chunkIndex,
//     error: lastError.message
//   };
// };

// /**
//  * Enhanced chunk transcription with partial success handling
//  */
// const transcribeChunksEnhanced = async (chunkPaths, userId, sessionId, options = {}) => {
//   const {
//     maxRetries = 3,
//     concurrency = 2,
//     allowPartialFailure = true,
//   } = options;

//   const transcriptResults = new Array(chunkPaths.length).fill(null);
//   const failedChunks = [];
//   const successfulChunks = [];

//   console.log(`📝 [User ${userId}][Session ${sessionId}] Starting transcription of ${chunkPaths.length} chunks with concurrency: ${concurrency}`);

//   for (let i = 0; i < chunkPaths.length; i += concurrency) {
//     const batch = chunkPaths.slice(i, i + concurrency);
//     const batchPromises = batch.map(async (chunkPath, batchIndex) => {
//       const actualIndex = i + batchIndex;

//       const result = await transcribeChunkWithRetry(
//         chunkPath,
//         actualIndex,
//         userId,
//         sessionId,
//         maxRetries
//       );

//       transcriptResults[actualIndex] = result;

//       if (result.success) {
//         successfulChunks.push(result);
//       } else {
//         failedChunks.push(result);
//       }

//       return result;
//     });

//     const batchResults = await Promise.all(batchPromises);
//     const successCount = batchResults.filter((r) => r.success).length;
//     console.log(`✅ [User ${userId}][Session ${sessionId}] Batch ${Math.floor(i / concurrency) + 1} completed: ${successCount}/${batch.length} successful`);

//     if (i + concurrency < chunkPaths.length) {
//       await sleep(500);
//     }
//   }

//   const successfulCount = successfulChunks.length;
//   const totalChunks = chunkPaths.length;

//   console.log(`🎯 [User ${userId}][Session ${sessionId}] Transcription Summary: ${successfulCount}/${totalChunks} chunks successful`);

//   if (failedChunks.length > 0) {
//     console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed chunks:`, failedChunks.map((f) => f.chunkIndex + 1));
//   }

//   // Always return results, even if some chunks failed
//   const combinedTranscript = transcriptResults
//     .filter(result => result !== null)
//     .map(result => result.transcript)
//     .join(" ");

//   return {
//     success: successfulCount > 0, // Success if at least one chunk worked
//     transcript: combinedTranscript,
//     totalChunks,
//     successfulChunks: successfulCount,
//     failedChunks: failedChunks.length,
//     errors: failedChunks.map(f => ({ chunkIndex: f.chunkIndex, error: f.error })),
//     partialResult: failedChunks.length > 0 && successfulCount > 0
//   };
// };

// const processTranscriptWithAI = async (transcription, userId, sessionId) => {
//   const processingResults = {
//     formattedTranscription: null,
//     mainData: null,
//     extraData: null,
//     errors: []
//   };

//   // Step 1: Format transcript with speakers
//   try {
//     console.log(`🧠 [User ${userId}][Session ${sessionId}] Formatting transcript with speakers...`);
//     processingResults.formattedTranscription = await formatTranscriptWithSpeakers(transcription);
//     console.log(`✅ [User ${userId}][Session ${sessionId}] Transcript formatting completed`);
//   } catch (error) {
//     console.error(`❌ [User ${userId}][Session ${sessionId}] Speaker formatting failed:`, error.message);
//     processingResults.errors.push({ step: 'speaker_formatting', error: error.message });

//     // Fallback: create basic format from raw transcription
//     processingResults.formattedTranscription = [{
//       speaker: "Unknown",
//       text: transcription
//     }];
//   }

//   // Step 2: Extract comprehensive meeting data using new approach
//   try {
//     console.log(`🧠 [User ${userId}][Session ${sessionId}] Extracting comprehensive meeting data...`);
//     processingResults.comprehensiveData = await extractComprehensiveMeetingData(processingResults.formattedTranscription);
//     console.log(`✅ [User ${userId}][Session ${sessionId}] Comprehensive data extraction completed`);
//     console.log('Comprehensive data:', processingResults.comprehensiveData);
//   } catch (error) {
//     console.error(`❌ [User ${userId}][Session ${sessionId}] Comprehensive data extraction failed:`, error.message);
//     processingResults.errors.push({ step: 'comprehensive_data_extraction', error: error.message });

//     // Fallback: create basic structure
//     processingResults.comprehensiveData = {
//       basicInfo: {
//         title: "Meeting Recording",
//         participants: [],
//         agenda: [],
//         summary: "Summary generation failed. Raw transcript is available.",
//         meetingType: 'general'
//       },
//       minutes: [],
//       nextSteps: [],
//       projects: [],
//       keyInitiatives: [],
//       challengesAndRisks: [],
//       decisionsMade: [],
//       implementationPlan: null,
//       hasActionItems: false,
//       hasProjects: false,
//       hasDecisions: false,
//       hasImplementationPlan: false,
//       hasChallengesRisks: false,
//       hasKeyInitiatives: false,
//       meetingType: 'general'
//     };
//   }

//   return processingResults;
// };

// /**
//  * Create meeting data object from comprehensive extraction results
//  */
// const createMeetingDataFromComprehensive = (comprehensiveData, formattedTranscription, defaultTitle = "Meeting Session") => {
//   const basicInfo = comprehensiveData.basicInfo || {};

//   return {
//     // Basic info
//     title: basicInfo.title || defaultTitle,
//     participants: basicInfo.participants || [],
//     agenda: basicInfo.agenda || [],
//     summary: basicInfo.summary || "Summary not available",
//     meetingType: comprehensiveData.meetingType || basicInfo.meetingType || 'general',

//     // Formatted transcript
//     transcript: formattedTranscription.filter(t => t.text && t.text.trim() !== ""),

//     // Core meeting content
//     minutes: comprehensiveData.minutes || [],
//     nextSteps: comprehensiveData.nextSteps || [],

//     // NEW: Enhanced content
//     projects: comprehensiveData.projects || [],
//     keyInitiatives: comprehensiveData.keyInitiatives || [],
//     implementationPlan: comprehensiveData.implementationPlan,
//     challengesAndRisks: comprehensiveData.challengesAndRisks || [],
//     decisionsMade: comprehensiveData.decisionsMade || [],

//     // Boolean flags
//     hasActionItems: comprehensiveData.hasActionItems || false,
//     hasProjects: comprehensiveData.hasProjects || false,
//     hasDecisions: comprehensiveData.hasDecisions || false,
//     hasImplementationPlan: comprehensiveData.hasImplementationPlan || false,
//     hasChallengesRisks: comprehensiveData.hasChallengesRisks || false,
//     hasKeyInitiatives: comprehensiveData.hasKeyInitiatives || false
//   };
// };


// const splitAudioIntoChunks = async (inputPath, chunkDuration, userTempDir, userId, sessionId) => {
//   const duration = await getAudioDuration(inputPath);
//   const chunks = [];

//   if (duration <= chunkDuration) {
//     return [inputPath];
//   }

//   const numChunks = Math.ceil(duration / chunkDuration);
//   console.log(`🔄 [User ${userId}][Session ${sessionId}] Splitting ${Math.round(duration)}s audio into ${numChunks} chunks...`);

//   for (let i = 0; i < numChunks; i++) {
//     const startTime = i * chunkDuration;
//     const chunkPath = path.join(userTempDir, `chunk_${i}.wav`);

//     await new Promise((resolve, reject) => {
//       ffmpeg(inputPath)
//         .seekInput(startTime)
//         .duration(chunkDuration)
//         .audioChannels(1)
//         .audioFrequency(16000)
//         .toFormat("wav")
//         .on("end", resolve)
//         .on("error", reject)
//         .save(chunkPath);
//     });

//     chunks.push(chunkPath);
//   }

//   console.log(`📂 [User ${userId}][Session ${sessionId}] Created ${chunks.length} chunks`);
//   return chunks;
// };

// const getAudioDuration = (filePath) => {
//   return new Promise((resolve, reject) => {
//     ffmpeg.ffprobe(filePath, (err, metadata) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(metadata.format.duration);
//       }
//     });
//   });
// };

// /**
//  * Enhanced user usage update with error handling
//  */
// const updateUserUsage = async (userId, durationSeconds, meetingType) => {
//   // First get the user with their plan populated
//   const user = await User.findById(userId).populate('plan');
//   if (!user) {
//     throw new Error('User not found');
//   }
//   const updateFields = {
//     $inc: {
//       totalSecondsUsed: durationSeconds
//     }
//   };

//   switch (meetingType) {
//     case 'live-transcription':
//       updateFields.$inc.liveTranscriptionSecondsUsed = durationSeconds;
//       break;
//     case 'audio-notes':
//       updateFields.$inc.audioNotesSecondsUsed = durationSeconds;
//       break;
//     case 'recording':
//     default:
//       updateFields.$inc.recordingSecondsUsed = durationSeconds;
//       break;
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(userId, updateFields,
//       { new: true });
//     // Check if user has exceeded their plan limits
//     if (user?.plan) {
//       const totalMinutesUsed = Math.ceil(updatedUser.totalSecondsUsed / 60);
//       const planMinutesLimit = user.plan.minutes;

//       if (totalMinutesUsed >= planMinutesLimit) {
//         // User has reached or exceeded their plan limit
//         await User.findByIdAndUpdate(userId, {
//           hasExceededPlanLimit: true
//         });
//         console.log(`⚠️ [User ${userId}] Plan limit reached (${totalMinutesUsed}/${planMinutesLimit} minutes)`);
//       } else if (updatedUser.hasExceededPlanLimit && totalMinutesUsed < planMinutesLimit) {
//         // User was over limit but now is under (maybe they upgraded)
//         await User.findByIdAndUpdate(userId, {
//           hasExceededPlanLimit: false
//         });
//       }
//     }
//     console.log(`✅ [User ${userId}] Updated usage: +${durationSeconds}s for ${meetingType}`);
//     return updatedUser;
//   } catch (error) {
//     console.error(`❌ [User ${userId}] Failed to update usage:`, error);
//     throw error;
//   }
// };

// /**
//  * Enhanced audio notes processing with graceful error handling
//  */
// const processAudioNotes = async (req, user, durationInSeconds, userSession) => {
//   const { userId, sessionId, userTempDir } = userSession;

//   if (!req.file) {
//     throw new Error("No audio file provided");
//   }

//   const audioFile = req.file;
//   console.log(`🎵 [User ${userId}][Session ${sessionId}] Processing audio notes - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

//   const wavPath = path.join(userTempDir, "converted_audio.wav");
//   const processingErrors = [];

//   try {
//     // Convert to WAV format
//     console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
//     await new Promise((resolve, reject) => {
//       ffmpeg(audioFile.path)
//         .audioChannels(1)
//         .audioFrequency(16000)
//         .toFormat("wav")
//         .on("end", resolve)
//         .on("error", reject)
//         .save(wavPath);
//     });

//     // Upload original file to S3
//     const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
//     const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

//     // Check duration and split if necessary
//     console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
//     const audioDurationSeconds = await getAudioDuration(wavPath);
//     const CHUNK_DURATION = 180;
//     let chunkPaths;

//     if (audioDurationSeconds > CHUNK_DURATION) {
//       chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
//     } else {
//       console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
//       chunkPaths = [wavPath];
//     }

//     // Transcribe audio with enhanced error handling
//     console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
//     const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
//       maxRetries: 3,
//       concurrency: 2,
//       allowPartialFailure: true,
//     });

//     // Check if we got any transcription at all
//     if (!transcriptionResult.success || !transcriptionResult.transcript) {
//       throw new Error("Complete transcription failure - no audio could be processed");
//     }

//     // Add transcription warnings if partial failure
//     if (transcriptionResult.partialResult) {
//       processingErrors.push({
//         type: 'transcription_partial_failure',
//         message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
//         details: transcriptionResult.errors
//       });
//     }

//     // Process with AI (with graceful error handling)
//     console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
//     const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

//     // Add AI processing errors to our error list
//     if (aiResults.errors.length > 0) {
//       processingErrors.push({
//         type: 'ai_processing_errors',
//         message: 'Some AI processing steps failed',
//         details: aiResults.errors
//       });
//     }

//     // Create meeting data using comprehensive extraction
//     const meetingData = createMeetingDataFromComprehensive(
//       aiResults.comprehensiveData,
//       aiResults.formattedTranscription,
//       "Audio Notes Session"
//     );

//     // Parse due dates for next steps
//     const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
//       ...step,
//       parsedDueDate: parseDueDate(step.due, new Date()),
//       reminderSent: false,
//       reminderSentAt: null
//     }));

//     // Save to database with all new fields
//     const savedMeeting = await meetingSchema.create({
//       user: userId,

//       // Basic info
//       title: meetingData.title,
//       participants: meetingData.participants,
//       agenda: meetingData.agenda,
//       summary: meetingData.summary,
//       meetingType: meetingData.meetingType,

//       // Core content
//       transcript: meetingData.transcript,
//       minutes: meetingData.minutes,
//       nextSteps: nextStepsWithParsedDates,

//       // NEW: Enhanced content
//       projects: meetingData.projects,
//       keyInitiatives: meetingData.keyInitiatives,
//       implementationPlan: meetingData.implementationPlan,
//       challengesAndRisks: meetingData.challengesAndRisks,
//       decisionsMade: meetingData.decisionsMade,

//       // Boolean flags
//       hasActionItems: meetingData.hasActionItems,
//       hasProjects: meetingData.hasProjects,
//       hasDecisions: meetingData.hasDecisions,
//       hasImplementationPlan: meetingData.hasImplementationPlan,
//       hasChallengesRisks: meetingData.hasChallengesRisks,
//       hasKeyInitiatives: meetingData.hasKeyInitiatives,

//       // Technical fields
//       recordingLength: durationInSeconds,
//       recordingAudioUrl: uploadedAudioUrl,
//       type: "audio-notes",
//       processingMethod: "whisper-chunks",
//       processingErrors: processingErrors.length > 0 ? processingErrors : undefined
//     });

//     // Update user usage
//     await updateUserUsage(userId, durationInSeconds, 'audio-notes');

//     console.log(`✅ [User ${userId}][Session ${sessionId}] Audio notes processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

//     return {
//       success: true,
//       meeting: savedMeeting,
//       warnings: processingErrors.length > 0 ? processingErrors : undefined,
//       partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0
//     };

//   } finally {
//     // Clean up uploaded file
//     try {
//       if (fs.existsSync(audioFile.path)) {
//         fs.unlinkSync(audioFile.path);
//         console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
//       }
//     } catch (error) {
//       console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
//     }
//   }
// };

// /**
//  * Enhanced regular recording processing with graceful error handling
//  */
// const processRegularRecording = async (req, user, durationInSeconds, userSession, emails) => {
//   const { userId, sessionId, userTempDir } = userSession;

//   if (!req.file) {
//     throw new Error("No audio file provided");
//   }

//   const { videoUrl } = req.body;
//   if (!videoUrl) {
//     throw new Error("Missing video URL");
//   }

//   const audioFile = req.file;
//   console.log(`🎬 [User ${userId}][Session ${sessionId}] Processing screen recording - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

//   const processingErrors = [];

//   // Parse email recipients
//   let emailRecipients = [];
//   if (emails) {
//     try {
//       emailRecipients = JSON.parse(emails);
//       console.log(`📧 [User ${userId}][Session ${sessionId}] Email recipients: ${emailRecipients.length} addresses`);
//     } catch (error) {
//       console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed to parse emails, proceeding without email recipients`);
//       emailRecipients = [];
//       processingErrors.push({
//         type: 'email_parsing_error',
//         message: 'Failed to parse email recipients',
//         details: error.message
//       });
//     }
//   }

//   const wavPath = path.join(userTempDir, "converted_audio.wav");

//   try {
//     // Convert to WAV format
//     console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
//     await new Promise((resolve, reject) => {
//       ffmpeg(audioFile.path)
//         .audioChannels(1)
//         .audioFrequency(16000)
//         .toFormat("wav")
//         .on("end", resolve)
//         .on("error", reject)
//         .save(wavPath);
//     });

//     // Upload original file to S3
//     const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
//     const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

//     // Check duration and split if necessary
//     console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
//     const audioDurationSeconds = await getAudioDuration(wavPath);
//     const CHUNK_DURATION = 180;
//     let chunkPaths;

//     if (audioDurationSeconds > CHUNK_DURATION) {
//       chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
//     } else {
//       console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
//       chunkPaths = [wavPath];
//     }

//     // Transcribe audio
//     console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
//     const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
//       maxRetries: 3,
//       concurrency: 2,
//       allowPartialFailure: true,
//     });

//     // Check if we got any transcription at all
//     if (!transcriptionResult.success || !transcriptionResult.transcript) {
//       throw new Error("Complete transcription failure - no audio could be processed");
//     }

//     // Add transcription warnings if partial failure
//     if (transcriptionResult.partialResult) {
//       processingErrors.push({
//         type: 'transcription_partial_failure',
//         message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
//         details: transcriptionResult.errors
//       });
//     }

//     // Process with AI
//     console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
//     const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

//     // Add AI processing errors to our error list
//     if (aiResults.errors.length > 0) {
//       processingErrors.push({
//         type: 'ai_processing_errors',
//         message: 'Some AI processing steps failed',
//         details: aiResults.errors
//       });
//     }

//     // Create meeting data using comprehensive extraction
//     const meetingData = createMeetingDataFromComprehensive(
//       aiResults.comprehensiveData,
//       aiResults.formattedTranscription,
//       "Team Meeting"
//     );

//     // Parse due dates for next steps
//     const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
//       ...step,
//       parsedDueDate: parseDueDate(step.due, new Date()),
//       reminderSent: false,
//       reminderSentAt: null
//     }));

//     // Save to database with all new fields
//     const savedMeeting = await meetingSchema.create({
//       user: userId,

//       // Basic info
//       title: meetingData.title,
//       participants: meetingData.participants,
//       agenda: meetingData.agenda,
//       summary: meetingData.summary,
//       meetingType: meetingData.meetingType,

//       // Core content
//       transcript: meetingData.transcript,
//       minutes: meetingData.minutes,
//       nextSteps: nextStepsWithParsedDates,

//       // NEW: Enhanced content
//       projects: meetingData.projects,
//       keyInitiatives: meetingData.keyInitiatives,
//       implementationPlan: meetingData.implementationPlan,
//       challengesAndRisks: meetingData.challengesAndRisks,
//       decisionsMade: meetingData.decisionsMade,

//       // Boolean flags
//       hasActionItems: meetingData.hasActionItems,
//       hasProjects: meetingData.hasProjects,
//       hasDecisions: meetingData.hasDecisions,
//       hasImplementationPlan: meetingData.hasImplementationPlan,
//       hasChallengesRisks: meetingData.hasChallengesRisks,
//       hasKeyInitiatives: meetingData.hasKeyInitiatives,

//       // Technical fields
//       recordingLength: durationInSeconds,
//       recordingAudioUrl: uploadedAudioUrl,
//       recordingVideoUrl: videoUrl,
//       emailRecipients: emailRecipients,
//       type: "recording",
//       processingMethod: "whisper-chunks",
//       processingErrors: processingErrors.length > 0 ? processingErrors : undefined
//     });


//     // Update user usage
//     await updateUserUsage(userId, durationInSeconds, 'recording');

//     console.log(`✅ [User ${userId}][Session ${sessionId}] Screen recording processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

//     return {
//       success: true,
//       meeting: savedMeeting,
//       warnings: processingErrors.length > 0 ? processingErrors : undefined,
//       partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0
//     };

//   } finally {
//     // Clean up uploaded file
//     try {
//       if (fs.existsSync(audioFile.path)) {
//         fs.unlinkSync(audioFile.path);
//         console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
//       }
//     } catch (error) {
//       console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
//     }
//   }
// };

// // Generate presigned URL for video upload
// const generatePresignedUrl = async (req, res) => {
//   try {
//     const { fileName, fileType } = req.body;
//     const user = req.user;

//     if (!fileName || !fileType) {
//       return res
//         .status(400)
//         .json({ error: "fileName and fileType are required" });
//     }

//     const mediaKey = `meetings/media/${user._id}/${Date.now()}-${fileName}`;

//     const command = new PutObjectCommand({
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: mediaKey,
//       ContentType: fileType,
//       ACL: "private",
//     });

//     // Generate presigned URL that expires in 10 minutes
//     const presignedUrl = await getSignedUrl(s3Client, command, {
//       expiresIn: 600,
//     });

//     const videoUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${mediaKey}`;

//     res.json({
//       success: true,
//       presignedUrl,
//       videoUrl,
//       videoKey: mediaKey,
//     });
//   } catch (error) {
//     console.error("Error generating presigned URL:", error);
//     res.status(500).json({ error: "Failed to generate upload URL" });
//   }
// };


// const generateMeetingData = async (req, res) => {
//   const userId = req.user._id;
//   let userSession = null;
//   let savedMeeting = null;

//   try {
//     const {
//       duration,
//       emails,
//       videoUrl,
//       videoKey,
//       type,
//       liveTranscripts,
//       audioUrl,
//       scheduledMeetingId, // NEW: Check for scheduled meeting ID
//       fromScheduled,
//     } = req.body;
//     console.log(`🚀 [User ${userId}] Starting meeting processing - Type: ${type}`);

//     // NEW: Log if this is from a scheduled meeting
//     if (fromScheduled === "true" && scheduledMeetingId) {
//       console.log(`📅 [User ${userId}] Processing scheduled meeting recording: ${scheduledMeetingId}`);
//     }

//     const user = await User.findById(userId).populate('plan');
//     if (!user) {
//       throw new Error('User not found');
//     }
//     // Validate duration
//     const durationInSeconds = parseInt(duration) || 0;
//     if (durationInSeconds <= 0) {
//       return res.status(400).json({
//         error: "Invalid duration provided"
//       });
//     }

//     // Usage limit validation
//     const planMinutesLimit = user.plan?.minutes || 100;
//     const MAX_SECONDS_ALLOWED = planMinutesLimit * 60; // 100 minutes
//     const currentTotalUsage = user.totalSecondsUsed || 0;
//     const remainingSeconds = MAX_SECONDS_ALLOWED - currentTotalUsage;

//     if (user?.hasExceededPlanLimit) {
//       return res.status(403).json({
//         error: "Plan limit exceeded",
//         message: "You have reached your plan's minute limit. Please upgrade to continue recording.",
//         currentUsage: Math.round(currentTotalUsage / 60),
//         maxMinutes: planMinutesLimit,
//         remainingMinutes: 0,
//         hasExceededPlanLimit: true
//       });
//     }

//     if (currentTotalUsage >= MAX_SECONDS_ALLOWED) {
//       await User.findByIdAndUpdate(userId, {
//         hasExceededPlanLimit: true
//       });
//       return res.status(403).json({
//         error: "Usage limit exceeded",
//         message: "You have reached your plan's minute limit. Please upgrade to continue recording.",
//         currentUsage: Math.round(currentTotalUsage / 60),
//         maxMinutes: planMinutesLimit,
//         remainingMinutes: 0,
//         hasExceededPlanLimit: true
//       });
//     }

//     if (durationInSeconds > remainingSeconds) {
//       return res.status(403).json({
//         error: "Recording would exceed usage limit",
//         message: `This recording (${Math.round(durationInSeconds / 60)} minutes) would exceed your remaining limit of ${Math.round(remainingSeconds / 60)} minutes.`,
//         currentUsage: Math.round(currentTotalUsage / 60),
//         maxMinutes: 100,
//         remainingMinutes: Math.round(remainingSeconds / 60),
//         requestedMinutes: Math.round(durationInSeconds / 60)
//       });
//     }

//     // **NEW: Handle live transcripts for recordings and audio notes**
//     if ((type === "recording-with-live-transcripts" || type === "audio-notes-with-live-transcripts") && liveTranscripts) {
//       console.log(`🎙️ [User ${userId}] Processing ${type} with live transcripts (${JSON.parse(liveTranscripts).length} items)`);

//       // Parse live transcripts
//       let parsedTranscripts;
//       try {
//         parsedTranscripts = typeof liveTranscripts === "string" ? JSON.parse(liveTranscripts) : liveTranscripts;
//       } catch (error) {
//         return res.status(400).json({ error: "Invalid live transcripts format" });
//       }

//       // Convert to our format
//       const formattedTranscription = parsedTranscripts.map((transcript) => ({
//         speaker: transcript.speaker || "Unknown",
//         text: transcript.text || "",
//       }));

//       // Process with AI (same as live transcription)
//       const aiResults = await processTranscriptWithAI(
//         formattedTranscription.map(t => t.text).join(" "),
//         userId,
//         'live-session'
//       );

//       const processingErrors = [];
//       if (aiResults.errors.length > 0) {
//         processingErrors.push({
//           type: 'ai_processing_errors',
//           message: 'Some AI processing steps failed',
//           details: aiResults.errors
//         });
//       }

//       // Handle audio file upload to S3
//       let uploadedAudioUrl = null;
//       if (req.file) {
//         try {
//           const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(req.file.originalname)}`;
//           uploadedAudioUrl = await uploadToS3(req.file.path, audioKey, "audio/webm");

//           // Clean up uploaded file
//           if (fs.existsSync(req.file.path)) {
//             fs.unlinkSync(req.file.path);
//           }
//         } catch (uploadError) {
//           console.error(`❌ [User ${userId}] Failed to upload audio to S3:`, uploadError);
//           processingErrors.push({
//             type: 'audio_upload_error',
//             message: 'Failed to upload audio file',
//             details: uploadError.message
//           });
//         }
//       }

//       // Parse email recipients for recordings
//       let emailRecipients = [];
//       if (type === "recording-with-live-transcripts" && emails) {
//         try {
//           emailRecipients = JSON.parse(emails);
//           console.log(`📧 [User ${userId}] Email recipients: ${emailRecipients.length} addresses`);
//         } catch (error) {
//           console.warn(`⚠️ [User ${userId}] Failed to parse emails`);
//           processingErrors.push({
//             type: 'email_parsing_error',
//             message: 'Failed to parse email recipients',
//             details: error.message
//           });
//         }
//       }

//       const meetingData = {
//         title: aiResults.mainData.title || (type === "recording-with-live-transcripts" ? "Team Meeting" : "Audio Notes Session"),
//         participants: aiResults.mainData.participants || [],
//         agenda: aiResults.mainData.agenda || [],
//         summary: aiResults.mainData.summary || "Summary not available",
//         transcript: aiResults.formattedTranscription.filter(t => t.text && t.text.trim() !== ""),
//         minutes: aiResults.extraData.minutes || [],
//         nextSteps: aiResults.extraData.nextSteps || [],
//         emailRecipients: emailRecipients,
//       };

//       // Parse due dates for reminder system
//       const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
//         ...step,
//         parsedDueDate: parseDueDate(step.due, new Date()),
//         reminderSent: false,
//         reminderSentAt: null
//       }));

//       // Save to database
//       const meetingType = type === "recording-with-live-transcripts" ? "recording" : "audio-notes";
//       savedMeeting = await meetingSchema.create({
//         user: userId,
//         title: meetingData.title,
//         participants: meetingData.participants,
//         agenda: meetingData.agenda,
//         summary: meetingData.summary,
//         transcript: meetingData.transcript,
//         minutes: meetingData.minutes,
//         nextSteps: nextStepsWithParsedDates,
//         recordingLength: durationInSeconds,
//         recordingAudioUrl: uploadedAudioUrl,
//         recordingVideoUrl: type === "recording-with-live-transcripts" ? videoUrl : undefined,
//         emailRecipients: emailRecipients,
//         type: meetingType,
//         processingMethod: "deepgram-live", // NEW: Track processing method
//         processingErrors: processingErrors.length > 0 ? processingErrors : undefined
//       });

//       // Log parsed dates for debugging
//       if (nextStepsWithParsedDates.length > 0) {
//         console.log(`📅 [User ${userId}] Parsed ${nextStepsWithParsedDates.length} task due dates:`);
//         nextStepsWithParsedDates.forEach(step => {
//           console.log(`  - "${step.task}" (${step.assignee}) - Due: "${step.due}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
//         });
//       }

//       // Check for tasks due TODAY and send immediate reminder
//       const todaysTasks = nextStepsWithParsedDates.filter(step => {
//         if (!step.parsedDueDate) return false;
//         const today = new Date();
//         const taskDate = new Date(step.parsedDueDate);
//         return taskDate.toDateString() === today.toDateString();
//       });

//       if (todaysTasks.length > 0) {
//         console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);
//         try {
//           await sendTaskReminderEmail({
//             ...savedMeeting.toObject(),
//             user: user
//           }, todaysTasks);

//           todaysTasks.forEach(task => {
//             task.reminderSent = true;
//             task.reminderSentAt = new Date();
//           });
//           await savedMeeting.save();

//           console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
//         } catch (emailError) {
//           console.error('Failed to send immediate reminder:', emailError);
//         }
//       }

//       // Update user usage
//       const usageType = type === "recording-with-live-transcripts" ? 'recording' : 'audio-notes';
//       await updateUserUsage(userId, durationInSeconds, usageType);

//       // Create history record
//       await historyModel.create({
//         user: userId,
//         action: 'created',
//         targetType: 'Meeting',
//         targetId: savedMeeting._id,
//         details: {
//           meeting: {
//             title: savedMeeting.title,
//             type: savedMeeting.type,
//             participants: savedMeeting.participants,
//             recordingLength: durationInSeconds,
//             recordingLengthMinutes: Math.round(durationInSeconds / 60),
//             transcriptItems: savedMeeting.transcript.length,
//             minutesItems: savedMeeting.minutes.length,
//             nextStepsItems: savedMeeting.nextSteps.length,
//             nextStepsWithDates: nextStepsWithParsedDates.filter(s => s.parsedDueDate).length,
//             hasProcessingErrors: processingErrors.length > 0,
//             processingErrorCount: processingErrors.length
//           },
//           creator: {
//             userId: user._id,
//             userName: user.name || user.username,
//             userEmail: user.email
//           },
//           processing: {
//             method: 'deepgram-live',
//             originalTranscriptItems: parsedTranscripts.length,
//             aiProcessingErrors: aiResults.errors.length,
//             partialResult: aiResults.errors.length > 0,
//             hasVideo: type === "recording-with-live-transcripts",
//             hasEmails: emailRecipients.length > 0
//           },
//           usage: {
//             usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//             remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
//           }
//         }
//       });

//       console.log(`✅ [User ${userId}] ${type} processing completed with live transcripts ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

//       return res.json({
//         success: true,
//         meeting: savedMeeting,
//         warnings: processingErrors.length > 0 ? processingErrors : undefined,
//         partialResult: aiResults.errors.length > 0,
//         usage: {
//           usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//           remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
//           maxMinutes: 100
//         }
//       });
//     }

//     // Handle live transcription case with enhanced error handling
//     if (type === "live-transcription") {
//       if (!audioUrl || !liveTranscripts || !duration) {
//         return res.status(400).json({
//           error: "Missing required data for live transcription (audioUrl, liveTranscripts, duration)",
//         });
//       }

//       console.log(`🎙️ [User ${userId}] Processing live transcription with ${liveTranscripts.length} transcript items (${Math.round(durationInSeconds / 60)} minutes)`);
//       const processingErrors = [];

//       // Parse live transcripts
//       let parsedTranscripts;
//       try {
//         parsedTranscripts = typeof liveTranscripts === "string" ? JSON.parse(liveTranscripts) : liveTranscripts;
//       } catch (error) {
//         return res.status(400).json({ error: "Invalid live transcripts format" });
//       }

//       // Convert to our format
//       const formattedTranscription = parsedTranscripts.map((transcript) => ({
//         speaker: transcript.speaker || "Unknown",
//         text: transcript.text || "",
//       }));

//       // Process with AI (with graceful error handling)
//       const aiResults = await processTranscriptWithAI(
//         formattedTranscription.map(t => t.text).join(" "),
//         userId,
//         'live-session'
//       );

//       // Add AI processing errors to our error list
//       if (aiResults.errors.length > 0) {
//         processingErrors.push({
//           type: 'ai_processing_errors',
//           message: 'Some AI processing steps failed',
//           details: aiResults.errors
//         });
//       }

//       const meetingData = {
//         title: aiResults.mainData.title || "Live Transcription Session",
//         participants: aiResults.mainData.participants || [],
//         agenda: aiResults.mainData.agenda || [],
//         summary: aiResults.mainData.summary || "Summary not available",
//         transcript: aiResults.formattedTranscription.filter(t => t.text && t.text.trim() !== ""),
//         minutes: aiResults.extraData.minutes || [],
//         nextSteps: aiResults.extraData.nextSteps || [],
//       };

//       // ===== NEW: Parse due dates for reminder system =====
//       const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
//         ...step,
//         parsedDueDate: parseDueDate(step.due, new Date()),
//         reminderSent: false,
//         reminderSentAt: null
//       }));

//       // Save to database
//       savedMeeting = await meetingSchema.create({
//         user: userId,
//         title: meetingData.title,
//         participants: meetingData.participants,
//         agenda: meetingData.agenda,
//         summary: meetingData.summary,
//         transcript: meetingData.transcript,
//         minutes: meetingData.minutes,
//         nextSteps: nextStepsWithParsedDates, // Use parsed dates
//         recordingLength: durationInSeconds,
//         recordingAudioUrl: audioUrl,
//         type: "live-transcription",
//         processingErrors: processingErrors.length > 0 ? processingErrors : undefined
//       });

//       // ===== NEW: Log parsed dates for debugging =====
//       if (nextStepsWithParsedDates.length > 0) {
//         console.log(`📅 [User ${userId}] Parsed ${nextStepsWithParsedDates.length} task due dates:`);
//         nextStepsWithParsedDates.forEach(step => {
//           console.log(`  - "${step.task}" (${step.assignee}) - Due: "${step.due}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
//         });
//       }

//       // ===== NEW: Check for tasks due TODAY and send immediate reminder =====
//       const todaysTasks = nextStepsWithParsedDates.filter(step => {
//         if (!step.parsedDueDate) return false;
//         const today = new Date();
//         const taskDate = new Date(step.parsedDueDate);
//         return taskDate.toDateString() === today.toDateString();
//       });

//       // Add this debug logging before sending the email
//       console.log('🔍 DEBUG: Meeting object:', {
//         title: savedMeeting.title,
//         hasUser: !!savedMeeting.user,
//         userType: typeof savedMeeting.user,
//         userEmail: savedMeeting.user?.email || 'NO EMAIL'
//       });

//       if (todaysTasks.length > 0) {
//         console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);

//         // Send immediate email for today's tasks
//         try {
//           await sendTaskReminderEmail({
//             ...savedMeeting.toObject(),
//             user: user  // Use the user from req.user which has the email
//           }, todaysTasks);

//           // Mark as reminded
//           todaysTasks.forEach(task => {
//             task.reminderSent = true;
//             task.reminderSentAt = new Date();
//           });
//           await savedMeeting.save();

//           console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
//         } catch (emailError) {
//           console.error('Failed to send immediate reminder:', emailError);
//         }
//       }

//       // Update user usage
//       await updateUserUsage(userId, durationInSeconds, 'live-transcription');

//       // Create history record for meeting creation
//       await historyModel.create({
//         user: userId,
//         action: 'created',
//         targetType: 'Meeting',
//         targetId: savedMeeting._id,
//         details: {
//           meeting: {
//             title: savedMeeting.title,
//             type: savedMeeting.type,
//             participants: savedMeeting.participants,
//             recordingLength: durationInSeconds,
//             recordingLengthMinutes: Math.round(durationInSeconds / 60),
//             transcriptItems: savedMeeting.transcript.length,
//             minutesItems: savedMeeting.minutes.length,
//             nextStepsItems: savedMeeting.nextSteps.length,
//             nextStepsWithDates: nextStepsWithParsedDates.filter(s => s.parsedDueDate).length, // NEW
//             hasProcessingErrors: processingErrors.length > 0,
//             processingErrorCount: processingErrors.length
//           },
//           creator: {
//             userId: user._id,
//             userName: user.name || user.username,
//             userEmail: user.email
//           },
//           processing: {
//             method: 'live-transcription',
//             originalTranscriptItems: parsedTranscripts.length,
//             aiProcessingErrors: aiResults.errors.length,
//             partialResult: aiResults.errors.length > 0
//           },
//           usage: {
//             usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//             remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
//           }
//         }
//       });

//       console.log(`✅ [User ${userId}] Live transcription processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

//       return res.json({
//         success: true,
//         meeting: savedMeeting,
//         warnings: processingErrors.length > 0 ? processingErrors : undefined,
//         partialResult: aiResults.errors.length > 0,
//         usage: {
//           usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//           remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
//           maxMinutes: 100
//         }
//       });
//     }

//     // For file-based processing, create user session
//     userSession = createUserSession(userId);
//     const { sessionId, userTempDir, cleanup } = userSession;
//     console.log(`📁 [User ${userId}][Session ${sessionId}] User session created`);

//     let result;

//     // Handle different processing types with enhanced error handling
//     if (type === "audio-notes") {
//       result = await processAudioNotes(req, user, durationInSeconds, { userId, sessionId, userTempDir });
//     } else {
//       // Regular recording - but check if it's from scheduled meeting
//       if (fromScheduled === "true" && scheduledMeetingId) {
//         // Process as regular recording but we'll update scheduled meeting instead of creating new
//         result = await processScheduledMeetingRecording(req, user, durationInSeconds, { userId, sessionId, userTempDir }, emails, scheduledMeetingId);
//       } else {
//         // Regular recording
//         result = await processRegularRecording(req, user, durationInSeconds, { userId, sessionId, userTempDir }, emails);
//       }
//     }

//     // If we have a successful result with a meeting, create history
//     if (result.success && result.meeting) {
//       savedMeeting = result.meeting;

//       // ===== NEW: Parse due dates for any type of meeting =====
//       if (savedMeeting.nextSteps && savedMeeting.nextSteps.length > 0) {
//         console.log(`📅 [User ${userId}] Parsing due dates for ${savedMeeting.nextSteps.length} tasks...`);

//         // Parse due dates for each next step
//         for (let i = 0; i < savedMeeting.nextSteps.length; i++) {
//           const step = savedMeeting.nextSteps[i];
//           const originalDue = step.due;
//           step.parsedDueDate = parseDueDate(step.due, savedMeeting.createdAt);
//           step.reminderSent = false;
//           step.reminderSentAt = null;

//           console.log(`  - "${step.task}" (${step.assignee}) - Due: "${originalDue}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
//         }

//         // Save the updated meeting with parsed dates
//         await savedMeeting.save();
//         console.log(`✅ [User ${userId}] Due dates parsed and saved for ${savedMeeting.nextSteps.filter(s => s.parsedDueDate).length} tasks`);

//         // ===== NEW: Check for tasks due TODAY and send immediate reminder =====
//         const todaysTasks = savedMeeting.nextSteps.filter(step => {
//           if (!step.parsedDueDate) return false;
//           const today = new Date();
//           const taskDate = new Date(step.parsedDueDate);
//           return taskDate.toDateString() === today.toDateString();
//         });
//         // Add this debug logging before sending the email
//         console.log('🔍 DEBUG: Meeting object:', {
//           title: savedMeeting.title,
//           hasUser: !!savedMeeting.user,
//           userType: typeof savedMeeting.user,
//           userEmail: savedMeeting.user?.email || 'NO EMAIL'
//         });
//         if (todaysTasks.length > 0) {
//           console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);

//           // Send immediate email for today's tasks
//           try {
//             await sendTaskReminderEmail({
//               ...savedMeeting.toObject(),
//               user: user  // Use the user from req.user which has the email
//             }, todaysTasks);

//             // Mark as reminded
//             todaysTasks.forEach(task => {
//               task.reminderSent = true;
//               task.reminderSentAt = new Date();
//             });
//             await savedMeeting.save();

//             console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
//           } catch (emailError) {
//             console.error('Failed to send immediate reminder:', emailError);
//           }
//         }
//       }

//       const historyAction = fromScheduled === "true" ? 'completed_scheduled_meeting' : 'created';

//       await historyModel.create({
//         user: userId,
//         action: historyAction,
//         targetType: 'Meeting',
//         targetId: savedMeeting._id,
//         details: {
//           meeting: {
//             title: savedMeeting.title,
//             type: savedMeeting.type,
//             participants: savedMeeting.participants || [],
//             recordingLength: durationInSeconds,
//             recordingLengthMinutes: Math.round(durationInSeconds / 60),
//             transcriptItems: savedMeeting.transcript ? savedMeeting.transcript.length : 0,
//             minutesItems: savedMeeting.minutes ? savedMeeting.minutes.length : 0,
//             nextStepsItems: savedMeeting.nextSteps ? savedMeeting.nextSteps.length : 0,
//             nextStepsWithDates: savedMeeting.nextSteps ? savedMeeting.nextSteps.filter(s => s.parsedDueDate).length : 0, // NEW
//             emailRecipients: savedMeeting.emailRecipients || [],
//             hasVideo: !!savedMeeting.recordingVideoUrl,
//             hasAudio: !!savedMeeting.recordingAudioUrl,
//             hasWarnings: !!result.warnings,
//             warningCount: result.warnings ? result.warnings.length : 0,
//             wasScheduled: fromScheduled === "true", // NEW: Track if this was from scheduled meeting
//             originalScheduledDateTime: fromScheduled === "true" ? savedMeeting.scheduledDateTime : null
//           },
//           creator: {
//             userId: user._id,
//             userName: user.name || user.username,
//             userEmail: user.email
//           },
//           processing: {
//             method: fromScheduled === "true" ? 'scheduled-meeting-recording' : type,
//             sessionId: sessionId,
//             hadVideo: !!videoUrl,
//             hadEmails: !!(emails && emails.length > 0),
//             partialResult: !!result.partialResult
//           },
//           usage: {
//             usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//             remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
//           }
//         }
//       });
//     }

//     // Clean up session
//     cleanup();

//     // Return success response with warnings if any
//     res.json({
//       ...result,
//       usage: {
//         usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
//         remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
//         maxMinutes: 100
//       }
//     });

//   } catch (error) {
//     console.error(`💥 [User ${userId}] Error in generateMeetingData:`, error);

//     // Always cleanup session on error
//     if (userSession?.cleanup) {
//       try {
//         userSession.cleanup();
//       } catch (cleanupError) {
//         console.error(`❌ [User ${userId}] Failed to cleanup session:`, cleanupError);
//       }
//     }

//     // Create history record for failed meeting creation
//     try {
//       await historyModel.create({
//         user: userId,
//         action: 'creation_failed',
//         targetType: 'Meeting',
//         targetId: null,
//         details: {
//           error: {
//             message: error.message,
//             type: type,
//             duration: durationInSeconds,
//             durationMinutes: Math.round(durationInSeconds / 60)
//           },
//           user: {
//             userId: user._id,
//             userName: user.name || user.username,
//             userEmail: user.email
//           },
//           attemptedProcessing: {
//             method: type,
//             hadVideo: !!req.body.videoUrl,
//             hadAudio: !!req.body.audioUrl,
//             hadTranscripts: !!req.body.liveTranscripts
//           },
//           usage: {
//             currentUsage: Math.round(currentTotalUsage / 60),
//             remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage) / 60)
//           }
//         }
//       });
//     } catch (historyError) {
//       console.error(`Failed to log error to history:`, historyError);
//     }

//     // Check if this is a complete failure or if we can return partial results
//     if (error.message.includes("Complete transcription failure")) {
//       res.status(500).json({
//         error: "Complete processing failure",
//         details: error.message,
//         message: "No audio could be transcribed. Please try again with better audio quality."
//       });
//     } else {
//       res.status(500).json({
//         error: "Processing failed",
//         details: error.message,
//       });
//     }
//   }
// };

// const getMeetingData = async (req, res) => {
//   const user = req.user;
//   console.log("------------------");

//   try {
//     const meetingData = await meetingSchema
//       .find({ user: user._id })
//       .sort({ createdAt: -1 });
//     res.json(meetingData);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch Data" });
//   }
// };

// export const getLastTenMeetings = async (req, res) => {
//   const user = req.user;
//   try {
//     const meetings = await meetingSchema
//       .find({ user: user._id })
//       .sort({ createdAt: -1 })
//       .limit(10);
//     res.json(meetings);
//   } catch (error) {
//     console.error("Error fetching last ten meetings:", error);
//     res.status(500).json({ error: "Failed to fetch last ten meetings" });
//   }
// };

// const getSingleMeetingData = async (req, res) => {
//   const user = req.user;
//   const { id } = req.params;
//   console.log(id);

//   try {
//     const meetingData = await meetingSchema
//       .findOne({ _id: id });
//     if (!meetingData) {
//       return res.status(404).json({ error: "Meeting not found" });
//     }
//     res.json(meetingData);
//   } catch (error) {
//     console.error("Error fetching single meeting data:", error);
//     res.status(500).json({ error: "Failed to fetch meeting data" });
//   }
// }

// const getMeetingDetails = async (req, res) => {
//   try {
//     const meeting = await meetingSchema
//       .findById(req.params.id)
//       .populate("user", "username email")
//       .lean();

//     if (!meeting) {
//       return res.status(404).json({
//         success: false,
//         message: "Meeting recording not found",
//       });
//     }

//     // Format data for frontend
//     const response = {
//       ...meeting,
//       createdAt: new Date(meeting.createdAt).toLocaleString(),
//       recordingLength: formatDuration(meeting.recordingLength),
//     };

//     res.json({
//       success: true,
//       meeting: response,
//     });
//   } catch (error) {
//     console.error("Error fetching meeting details:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching meeting details",
//     });
//   }
// };

// function formatDuration(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = seconds % 60;
//   return `${mins.toString().padStart(2, "0")}:${secs
//     .toString()
//     .padStart(2, "0")}`;
// }
// const deleteMeetingData = async (req, res) => {
//   const user = req.user;
//   const { id } = req.params;

//   try {
//     // Get meeting data before deletion for history
//     const meeting = await meetingSchema.findById(id);
//     if (!meeting) {
//       return res.status(404).json({ error: "Meeting not found" });
//     }

//     // Store meeting data for history
//     const deletedMeetingData = {
//       title: meeting.title,
//       type: meeting.type,
//       participants: meeting.participants,
//       recordingLength: meeting.recordingLength,
//       recordingLengthMinutes: Math.round(meeting.recordingLength / 60),
//       hasTranscript: meeting.transcript && meeting.transcript.length > 0,
//       transcriptItems: meeting.transcript ? meeting.transcript.length : 0,
//       hasMinutes: meeting.minutes && meeting.minutes.length > 0,
//       minutesItems: meeting.minutes ? meeting.minutes.length : 0,
//       hasNextSteps: meeting.nextSteps && meeting.nextSteps.length > 0,
//       nextStepsItems: meeting.nextSteps ? meeting.nextSteps.length : 0,
//       emailRecipients: meeting.emailRecipients || [],
//       createdAt: meeting.createdAt,
//       updatedAt: meeting.updatedAt
//     };

//     // Delete the meeting
//     await meetingSchema.findByIdAndDelete(id);

//     // Create history record for meeting deletion
//     await historyModel.create({
//       user: user._id,
//       action: `deleted_${meeting.type.replace('-', '_')}_meeting`, // e.g., 'deleted_live_transcription_meeting', 'deleted_recording_meeting'
//       targetType: 'Meeting',
//       targetId: id,
//       details: {
//         deletedMeeting: deletedMeetingData,
//         deletedBy: {
//           userId: user._id,
//           userName: user.name || user.username,
//           userEmail: user.email
//         },
//         deletionReason: req.body?.reason || `User deleted ${meeting.type} meeting`,
//         meetingType: meeting.type,
//         summary: `Deleted ${meeting.type} meeting: "${meeting.title}" (${Math.round(meeting.recordingLength / 60)} minutes)`
//       }
//     });

//     res.json({ success: true, message: "Meeting deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting meeting data:", error);
//     res.status(500).json({ error: "Failed to delete meeting data" });
//   }
// };


// const getAnalyticsData = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const user = await User.findById(userId).populate('plan').lean();
//     const planMinutes = user.plan?.minutes || 100;
//     const MAX_SECONDS_ALLOWED = planMinutes * 60 || 6000; // 100 minutes

//     const totalUsed = user.totalSecondsUsed || 0;
//     const recordingUsed = user.recordingSecondsUsed || 0;
//     const liveTranscriptionUsed = user.liveTranscriptionSecondsUsed || 0;
//     const audioNotesUsed = user.audioNotesSecondsUsed || 0;

//     // Convert seconds to minutes
//     const totalUsedMinutes = Math.round(totalUsed / 60);
//     const recordingMinutes = Math.round(recordingUsed / 60);
//     const liveTranscriptionMinutes = Math.round(liveTranscriptionUsed / 60);
//     const audioNotesMinutes = Math.round(audioNotesUsed / 60);

//     // Calculate percentages based on max allowed (for overall usage)
//     const calculateMaxPercentage = (usedSeconds) => {
//       return Math.round((usedSeconds / MAX_SECONDS_ALLOWED) * 100);
//     };

//     // Get meetings from the last 30 days for daily usage analysis
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//     const recentMeetings = await meetingSchema
//       .find({
//         user: user._id,
//         createdAt: { $gte: thirtyDaysAgo }
//       })
//       .sort({ createdAt: -1 })
//       .lean();

//     // Calculate daily usage breakdown
//     const dailyUsage = {};
//     const dayColors = [
//       '#8B5CF6', '#EC4899', '#06B6D4', '#EF4444', '#10B981',
//       '#F97316', '#8B5A3C', '#6B46C1', '#DC2626', '#059669',
//       '#D97706', '#7C3AED', '#BE185D', '#0891B2', '#65A30D',
//       '#CA8A04', '#9333EA', '#C2410C', '#0369A1', '#16A34A',
//       '#EA580C', '#7C2D12', '#4338CA', '#BE123C', '#0F766E',
//       '#92400E', '#581C87', '#A21CAF', '#155E75', '#166534'
//     ];

//     recentMeetings.forEach((meeting) => {
//       const meetingDate = new Date(meeting.createdAt);
//       const dateKey = meetingDate.toDateString();
//       const durationMinutes = Math.round((meeting.recordingLength || 0) / 60);

//       if (!dailyUsage[dateKey]) {
//         dailyUsage[dateKey] = {
//           date: dateKey,
//           minutes: 0,
//           meetings: []
//         };
//       }

//       dailyUsage[dateKey].minutes += durationMinutes;
//       dailyUsage[dateKey].meetings.push(meeting);
//     });

//     // Convert daily usage to chart format
//     const dailyUsageArray = Object.values(dailyUsage)
//       .sort((a, b) => new Date(a.date) - new Date(b.date))
//       .slice(-10); // Last 10 days that have usage

//     const dailyUsageChartData = dailyUsageArray.map((day, index) => ({
//       name: new Date(day.date).toLocaleDateString('en-US', {
//         month: 'short',
//         day: 'numeric'
//       }),
//       value: day.minutes,
//       color: dayColors[index % dayColors.length],
//       fullDate: day.date,
//       meetingCount: day.meetings.length
//     }));

//     // Get meetings from the last week for the right chart
//     const oneWeekAgo = new Date();
//     oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//     const weeklyMeetings = await meetingSchema
//       .find({
//         user: user._id,
//         createdAt: { $gte: oneWeekAgo }
//       })
//       .sort({ createdAt: -1 })
//       .lean();

//     // Group meetings by type for the right chart
//     const meetingTypeColors = {
//       'recording': '#8B5CF6',
//       'live-transcription': '#EC4899',
//       'audio-notes': '#06B6D4'
//     };

//     const weeklyMeetingsChartData = weeklyMeetings.map((meeting, index) => {
//       const duration = Math.round((meeting.recordingLength || 0) / 60);
//       const baseColor = meetingTypeColors[meeting.type] || '#6B7280';

//       // If multiple meetings of same type, vary the shade slightly
//       const sameTypeMeetings = weeklyMeetings.filter(m => m.type === meeting.type);
//       const typeIndex = sameTypeMeetings.findIndex(m => m._id.toString() === meeting._id.toString());
//       const opacity = 1 - (typeIndex * 0.1); // Slightly different shades for same type

//       return {
//         name: meeting.title.length > 20 ? meeting.title.substring(0, 20) + '...' : meeting.title,
//         value: Math.max(duration, 1), // Minimum 1 minute for visibility
//         color: baseColor,
//         type: meeting.type,
//         fullTitle: meeting.title,
//         duration: duration,
//         createdAt: meeting.createdAt,
//         participants: meeting.participants?.length || 0,
//         hasWarnings: meeting.processingErrors && meeting.processingErrors.length > 0
//       };
//     });

//     // Format recent meetings for the table (last 10)
//     const formattedRecentMeetings = recentMeetings.slice(0, 10).map(meeting => {
//       const duration = meeting.recordingLength || 0;
//       const durationMinutes = Math.floor(duration / 60);
//       const durationSeconds = duration % 60;
//       const formattedDuration = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;

//       const primarySpeaker = meeting.participants && meeting.participants.length > 0
//         ? meeting.participants[0]
//         : 'Unknown';

//       const createdAt = new Date(meeting.createdAt);
//       const startTime = createdAt.toLocaleTimeString('en-US', {
//         hour: 'numeric',
//         minute: '2-digit',
//         hour12: true
//       });

//       const endTime = new Date(createdAt.getTime() + (duration * 1000)).toLocaleTimeString('en-US', {
//         hour: 'numeric',
//         minute: '2-digit',
//         hour12: true
//       });

//       return {
//         id: meeting._id,
//         title: meeting.title,
//         totalTime: formattedDuration,
//         startTime,
//         endTime,
//         speaker: primarySpeaker,
//         type: meeting.type,
//         date: createdAt.toLocaleDateString(),
//         participants: meeting.participants?.length || 0,
//         hasWarnings: meeting.processingErrors && meeting.processingErrors.length > 0,
//         processingErrors: meeting.processingErrors
//       };
//     });

//     // Overall usage statistics
//     const overallStats = {
//       totalUsedMinutes,
//       totalUsedSeconds: totalUsed,
//       remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - totalUsed) / 60),
//       remainingSeconds: MAX_SECONDS_ALLOWED - totalUsed,
//       percentageUsed: calculateMaxPercentage(totalUsed),
//       maxMinutes: 100,
//       breakdown: {
//         recording: {
//           minutes: recordingMinutes,
//           seconds: recordingUsed,
//           percentage: calculateMaxPercentage(recordingUsed)
//         },
//         liveTranscription: {
//           minutes: liveTranscriptionMinutes,
//           seconds: liveTranscriptionUsed,
//           percentage: calculateMaxPercentage(liveTranscriptionUsed)
//         },
//         audioNotes: {
//           minutes: audioNotesMinutes,
//           seconds: audioNotesUsed,
//           percentage: calculateMaxPercentage(audioNotesUsed)
//         }
//       }
//     };

//     // Meeting type counts
//     const meetingCounts = {
//       recording: recentMeetings.filter(m => m.type === 'recording').length,
//       liveTranscription: recentMeetings.filter(m => m.type === 'live-transcription').length,
//       audioNotes: recentMeetings.filter(m => m.type === 'audio-notes').length,
//       total: recentMeetings.length,
//       withWarnings: recentMeetings.filter(m => m.processingErrors && m.processingErrors.length > 0).length
//     };

//     res.json({
//       success: true,
//       analytics: {
//         dailyUsageChartData, // For left chart - daily usage
//         weeklyMeetingsChartData, // For right chart - recent meetings
//         recentMeetings: formattedRecentMeetings, // For table
//         overallStats,
//         meetingCounts,
//         hasUsage: totalUsed > 0,
//         hasDailyUsage: dailyUsageChartData.length > 0,
//         hasWeeklyMeetings: weeklyMeetingsChartData.length > 0
//       }
//     });

//   } catch (error) {
//     console.error("Error fetching analytics data:", error);
//     res.status(500).json({
//       error: "Failed to fetch analytics data",
//       details: error.message
//     });
//   }
// };

// export const scheduleNewMeeting = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const {
//       title,
//       emailRecipients,
//       scheduledDateTime,
//       discussionTopics,
//       scheduledDuration = 60,
//       meetingLink,
//       location
//     } = req.body;

//     // Validation
//     if (!title || !scheduledDateTime) {
//       return res.status(400).json({
//         error: "Meeting title and scheduled date/time are required"
//       });
//     }

//     // Check if the scheduled time is in the future
//     const scheduledDate = new Date(scheduledDateTime);
//     if (scheduledDate <= new Date()) {
//       return res.status(400).json({
//         error: "Scheduled time must be in the future"
//       });
//     }

//     // Create new scheduled meeting
//     const newMeeting = new meetingSchema({
//       user: userId,
//       title,
//       emailRecipients: emailRecipients || [],
//       scheduledDateTime: scheduledDate,
//       discussionTopics: discussionTopics || [],
//       scheduledDuration,
//       meetingLink,
//       location,
//       type: 'scheduled',
//       meetingStatus: 'scheduled',
//       participants: [],
//       agenda: []
//     });

//     await newMeeting.save();

//     res.status(201).json({
//       message: "Meeting scheduled successfully",
//       meeting: newMeeting
//     });

//   } catch (error) {
//     console.error("Error scheduling meeting:", error);
//     res.status(500).json({
//       error: "Failed to schedule meeting",
//       details: error.message
//     });
//   }
// };

// // Get all scheduled meetings for a user
// export const getScheduledMeetings = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const { status, upcoming } = req.query;

//     let query = {
//       user: userId,
//       type: 'scheduled'
//     };

//     // Filter by status if provided
//     if (status) {
//       query.meetingStatus = status;
//     }

//     // Filter for upcoming meetings only
//     if (upcoming === 'true') {
//       query.scheduledDateTime = { $gte: new Date() };
//       query.meetingStatus = { $in: ['scheduled', 'in-progress'] };
//     }

//     const scheduledMeetings = await meetingSchema
//       .find(query)
//       .sort({ scheduledDateTime: 1 })
//       .lean();

//     res.status(200).json({
//       meetings: scheduledMeetings,
//       count: scheduledMeetings.length
//     });

//   } catch (error) {
//     console.error("Error fetching scheduled meetings:", error);
//     res.status(500).json({
//       error: "Failed to fetch scheduled meetings",
//       details: error.message
//     });
//   }
// };

// // Get today's meeting reminders
// export const getTodaysMeetingReminders = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const now = new Date();
//     const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);

//     // Find meetings scheduled for today that haven't been attended or missed
//     const todaysMeetings = await meetingSchema
//       .find({
//         user: userId,
//         type: 'scheduled',
//         scheduledDateTime: {
//           $gte: startOfDay,
//           $lt: endOfDay
//         },
//         meetingStatus: { $in: ['scheduled', 'in-progress'] },
//         isAttended: false
//       })
//       .sort({ scheduledDateTime: 1 })
//       .lean();

//     // Filter out meetings that have passed their time + 5 minutes buffer
//     const validReminders = todaysMeetings.filter(meeting => {
//       const meetingTime = new Date(meeting.scheduledDateTime);
//       const bufferTime = new Date(meetingTime.getTime() + 5 * 60 * 1000); // 5 minutes buffer
//       return now <= bufferTime;
//     });

//     // Mark meetings as missed if they're past their time + buffer
//     const missedMeetings = todaysMeetings.filter(meeting => {
//       const meetingTime = new Date(meeting.scheduledDateTime);
//       const bufferTime = new Date(meetingTime.getTime() + 5 * 60 * 1000);
//       return now > bufferTime;
//     });

//     // Update missed meetings status
//     if (missedMeetings.length > 0) {
//       const missedIds = missedMeetings.map(m => m._id);
//       await meetingSchema.updateMany(
//         { _id: { $in: missedIds } },
//         { meetingStatus: 'missed' }
//       );
//     }

//     res.status(200).json({
//       reminders: validReminders,
//       count: validReminders.length
//     });

//   } catch (error) {
//     console.error("Error fetching today's reminders:", error);
//     res.status(500).json({
//       error: "Failed to fetch today's reminders",
//       details: error.message
//     });
//   }
// };

// // Update meeting status
// export const updateMeetingStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
//     const userId = req.user._id;

//     const validStatuses = ['scheduled', 'in-progress', 'completed', 'cancelled', 'missed'];
//     if (!validStatuses.includes(status)) {
//       return res.status(400).json({
//         error: "Invalid meeting status"
//       });
//     }

//     const meeting = await meetingSchema.findOneAndUpdate(
//       { _id: id, user: userId, type: 'scheduled' },
//       {
//         meetingStatus: status,
//         ...(status === 'completed' && { isAttended: true })
//       },
//       { new: true }
//     );

//     if (!meeting) {
//       return res.status(404).json({
//         error: "Scheduled meeting not found"
//       });
//     }

//     res.status(200).json({
//       message: "Meeting status updated successfully",
//       meeting
//     });

//   } catch (error) {
//     console.error("Error updating meeting status:", error);
//     res.status(500).json({
//       error: "Failed to update meeting status",
//       details: error.message
//     });
//   }
// };

// // Mark meeting as attended
// export const markMeetingAsAttended = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userId = req.user._id;

//     const meeting = await meetingSchema.findOneAndUpdate(
//       { _id: id, user: userId, type: 'scheduled' },
//       {
//         isAttended: true,
//         meetingStatus: 'completed'
//       },
//       { new: true }
//     );

//     if (!meeting) {
//       return res.status(404).json({
//         error: "Scheduled meeting not found"
//       });
//     }

//     res.status(200).json({
//       message: "Meeting marked as attended",
//       meeting
//     });

//   } catch (error) {
//     console.error("Error marking meeting as attended:", error);
//     res.status(500).json({
//       error: "Failed to mark meeting as attended",
//       details: error.message
//     });
//   }
// };

// // Cancel scheduled meeting
// export const cancelScheduledMeeting = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userId = req.user._id;

//     const meeting = await meetingSchema.findOneAndUpdate(
//       { _id: id, user: userId, type: 'scheduled' },
//       { meetingStatus: 'cancelled' },
//       { new: true }
//     );

//     if (!meeting) {
//       return res.status(404).json({
//         error: "Scheduled meeting not found"
//       });
//     }

//     res.status(200).json({
//       message: "Meeting cancelled successfully",
//       meeting
//     });

//   } catch (error) {
//     console.error("Error cancelling meeting:", error);
//     res.status(500).json({
//       error: "Failed to cancel meeting",
//       details: error.message
//     });
//   }
// };

// // NEW: Add this function to handle scheduled meeting recording
// const processScheduledMeetingRecording = async (req, user, durationInSeconds, userSession, emails, scheduledMeetingId) => {
//   const { userId, sessionId, userTempDir } = userSession;

//   if (!req.file) {
//     throw new Error("No audio file provided");
//   }

//   const { videoUrl } = req.body;
//   if (!videoUrl) {
//     throw new Error("Missing video URL");
//   }

//   const audioFile = req.file;
//   console.log(`🎬📅 [User ${userId}][Session ${sessionId}] Processing scheduled meeting recording - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

//   const processingErrors = [];

//   // Parse email recipients (same as regular recording)
//   let emailRecipients = [];
//   if (emails) {
//     try {
//       emailRecipients = JSON.parse(emails);
//       console.log(`📧 [User ${userId}][Session ${sessionId}] Email recipients: ${emailRecipients.length} addresses`);
//     } catch (error) {
//       console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed to parse emails, proceeding without email recipients`);
//       emailRecipients = [];
//       processingErrors.push({
//         type: 'email_parsing_error',
//         message: 'Failed to parse email recipients',
//         details: error.message
//       });
//     }
//   }

//   const wavPath = path.join(userTempDir, "converted_audio.wav");

//   try {
//     // Convert to WAV format (same process as regular recording)
//     console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
//     await new Promise((resolve, reject) => {
//       ffmpeg(audioFile.path)
//         .audioChannels(1)
//         .audioFrequency(16000)
//         .toFormat("wav")
//         .on("end", resolve)
//         .on("error", reject)
//         .save(wavPath);
//     });

//     // Upload original file to S3
//     const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
//     const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

//     // Check duration and split if necessary
//     console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
//     const audioDurationSeconds = await getAudioDuration(wavPath);
//     const CHUNK_DURATION = 180;
//     let chunkPaths;

//     if (audioDurationSeconds > CHUNK_DURATION) {
//       chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
//     } else {
//       console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
//       chunkPaths = [wavPath];
//     }

//     // Transcribe audio (same process as regular recording)
//     console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
//     const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
//       maxRetries: 3,
//       concurrency: 2,
//       allowPartialFailure: true,
//     });

//     // Check if we got any transcription at all
//     if (!transcriptionResult.success || !transcriptionResult.transcript) {
//       throw new Error("Complete transcription failure - no audio could be processed");
//     }

//     // Add transcription warnings if partial failure
//     if (transcriptionResult.partialResult) {
//       processingErrors.push({
//         type: 'transcription_partial_failure',
//         message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
//         details: transcriptionResult.errors
//       });
//     }

//     // Get the existing scheduled meeting to access discussionTopics
//     const existingMeeting = await meetingSchema.findOne({
//       _id: scheduledMeetingId,
//       user: userId,
//       type: 'scheduled'
//     });

//     if (!existingMeeting) {
//       throw new Error('Scheduled meeting not found');
//     }

//     // NEW: Analyze discussion topics if they exist
//     let discussionAnalysis = null;
//     if (existingMeeting.discussionTopics && existingMeeting.discussionTopics.length > 0) {
//       console.log(`📋 [User ${userId}][Session ${sessionId}] Analyzing ${existingMeeting.discussionTopics.length} scheduled discussion topics`);

//       try {
//         discussionAnalysis = await analyzeDiscussionTopics(
//           transcriptionResult.transcript,
//           existingMeeting.discussionTopics,
//           userId,
//           sessionId
//         );

//         console.log(`✅ [User ${userId}][Session ${sessionId}] Discussion analysis completed - Match score: ${discussionAnalysis?.discussionMatchScore || 0}%`);
//       } catch (discussionError) {
//         console.error(`⚠️ [User ${userId}][Session ${sessionId}] Discussion analysis failed:`, discussionError);
//         processingErrors.push({
//           type: 'discussion_analysis_error',
//           message: 'Failed to analyze discussion topics',
//           details: discussionError.message
//         });
//       }
//     } else {
//       console.log(`📋 [User ${userId}][Session ${sessionId}] No discussion topics scheduled - skipping analysis`);
//     }

//     // Process with AI (same as regular recording)
//     console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
//     const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

//     // Add AI processing errors to our error list
//     if (aiResults.errors.length > 0) {
//       processingErrors.push({
//         type: 'ai_processing_errors',
//         message: 'Some AI processing steps failed',
//         details: aiResults.errors
//       });
//     }

//     // Create meeting data using comprehensive extraction
//     const meetingData = createMeetingDataFromComprehensive(
//       aiResults.comprehensiveData,
//       aiResults.formattedTranscription,
//       "Scheduled Meeting Recording" // Default title will be overridden by existing scheduled meeting title
//     );

//     // NEW: Add discussion analysis to meeting data if available
//     if (discussionAnalysis) {
//       meetingData.discussionTopicsAnalysis = discussionAnalysis.discussionTopicsAnalysis;
//       meetingData.hasDiscussionAnalysis = discussionAnalysis.hasDiscussionAnalysis;
//       meetingData.discussionMatchScore = discussionAnalysis.discussionMatchScore;
//       meetingData.discussionSummary = discussionAnalysis.discussionSummary;
//       meetingData.additionalTopicsDiscussed = discussionAnalysis.additionalTopicsDiscussed;
//     }

//     // NEW: Update the scheduled meeting instead of creating new one
//     const updatedMeeting = await updateScheduledMeetingWithRecording(
//       scheduledMeetingId,
//       meetingData,
//       userId,
//       durationInSeconds,
//       uploadedAudioUrl,
//       videoUrl
//     );

//     // Update user usage (same as regular recording)
//     await updateUserUsage(userId, durationInSeconds, 'recording');

//     console.log(`✅ [User ${userId}][Session ${sessionId}] Scheduled meeting recording processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

//     return {
//       success: true,
//       meeting: updatedMeeting,
//       warnings: processingErrors.length > 0 ? processingErrors : undefined,
//       partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0,
//       discussionAnalysis: discussionAnalysis
//     };

//   } finally {
//     // Clean up uploaded file
//     try {
//       if (fs.existsSync(audioFile.path)) {
//         fs.unlinkSync(audioFile.path);
//         console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
//       }
//     } catch (error) {
//       console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
//     }
//   }
// };

// // Add this new function to handle scheduled meeting recording updates:
// const updateScheduledMeetingWithRecording = async (scheduledMeetingId, meetingData, userId, durationInSeconds, uploadedAudioUrl, videoUrl) => {
//   try {
//     // Find the existing scheduled meeting
//     const existingMeeting = await meetingSchema.findOne({
//       _id: scheduledMeetingId,
//       user: userId,
//       type: 'scheduled'
//     });

//     if (!existingMeeting) {
//       throw new Error('Scheduled meeting not found');
//     }

//     console.log(`📅 [User ${userId}] Updating scheduled meeting: ${existingMeeting.title}`);

//     // Parse due dates for next steps
//     const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
//       ...step,
//       parsedDueDate: parseDueDate(step.due, new Date()),
//       reminderSent: false,
//       reminderSentAt: null
//     }));

//     // Prepare update object
//     const updateData = {
//       // Keep original scheduled meeting data
//       // Add recording data
//       transcript: meetingData.transcript,
//       summary: meetingData.summary,
//       minutes: meetingData.minutes,
//       nextSteps: nextStepsWithParsedDates,

//       // Enhanced content from comprehensive extraction
//       projects: meetingData.projects || [],
//       keyInitiatives: meetingData.keyInitiatives || [],
//       implementationPlan: meetingData.implementationPlan,
//       challengesAndRisks: meetingData.challengesAndRisks || [],
//       decisionsMade: meetingData.decisionsMade || [],

//       // Boolean flags
//       hasActionItems: meetingData.hasActionItems || false,
//       hasProjects: meetingData.hasProjects || false,
//       hasDecisions: meetingData.hasDecisions || false,
//       hasImplementationPlan: meetingData.hasImplementationPlan || false,
//       hasChallengesRisks: meetingData.hasChallengesRisks || false,
//       hasKeyInitiatives: meetingData.hasKeyInitiatives || false,

//       // Update meeting type and status
//       meetingType: meetingData.meetingType || existingMeeting.meetingType || 'general',
//       meetingStatus: 'completed',
//       isAttended: true,

//       // Add recording metadata
//       recordingLength: durationInSeconds,
//       recordingAudioUrl: uploadedAudioUrl,
//       recordingVideoUrl: videoUrl,

//       // Merge participants (keep scheduled + add detected)
//       participants: [
//         ...new Set([
//           ...(existingMeeting.participants || []),
//           ...(meetingData.participants || [])
//         ])
//       ],

//       // Update agenda if AI detected better agenda items
//       agenda: meetingData.agenda || [],

//       // Processing metadata
//       processingMethod: "whisper-chunks",
//       processingErrors: undefined // Will be set if there are errors
//     };

//     // NEW: Add discussion analysis fields if available
//     if (meetingData.discussionTopicsAnalysis) {
//       updateData.discussionTopicsAnalysis = meetingData.discussionTopicsAnalysis;
//       updateData.hasDiscussionAnalysis = meetingData.hasDiscussionAnalysis;
//       updateData.discussionMatchScore = meetingData.discussionMatchScore;
//       updateData.discussionSummary = meetingData.discussionSummary;

//       console.log(`📊 [User ${userId}] Discussion analysis added - Match score: ${meetingData.discussionMatchScore}%`);
//     }

//     // Update the existing meeting with recording data
//     const updatedMeeting = await meetingSchema.findByIdAndUpdate(
//       scheduledMeetingId,
//       updateData,
//       { new: true }
//     );

//     console.log(`✅ [User ${userId}] Successfully updated scheduled meeting to completed`);
//     return updatedMeeting;

//   } catch (error) {
//     console.error(`❌ [User ${userId}] Failed to update scheduled meeting:`, error);
//     throw error;
//   }
// };

// export {
//   generateMeetingData,
//   getMeetingData,
//   getMeetingDetails,
//   generatePresignedUrl,
//   getSingleMeetingData,
//   deleteMeetingData,
//   getAnalyticsData
// };


import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffprobeInstaller from "@ffprobe-installer/ffprobe";
import { openaiOriginal } from "../index.js";
import meetingSchema from "../models/meeting.model.js";
import { parseDueDate } from '../services/dateParser.js';
import {
  extractComprehensiveMeetingData,
  extractMainMeetingData,
  extractMinutesAndNextSteps,
  formatTranscriptWithSpeakers,
  analyzeDiscussionTopics
} from "../prompts.js";
import { uploadToS3 } from "../utils.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../index.js";
import User from "../models/user.model.js";
import historyModel from "../models/history.model.js";
import { sendTaskReminderEmail } from "../services/emailService.js";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

/**
 * Sleep/delay utility function
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Create user-specific session directory
 */
const createUserSession = (userId) => {
  const sessionId = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  const userTempDir = path.join("uploads", "sessions", userId.toString(), sessionId);

  try {
    fs.mkdirSync(userTempDir, { recursive: true });
    console.log(`📁 [User ${userId}] Created session directory: ${sessionId}`);

    return {
      sessionId,
      userTempDir,
      cleanup: () => {
        try {
          if (fs.existsSync(userTempDir)) {
            fs.rmSync(userTempDir, { recursive: true, force: true });
            console.log(`🗑️ [User ${userId}] Session ${sessionId} cleaned up`);
          }
        } catch (error) {
          console.error(`❌ [User ${userId}] Failed to cleanup session ${sessionId}:`, error);
        }
      }
    };
  } catch (error) {
    console.error(`❌ [User ${userId}] Failed to create session directory:`, error);
    throw new Error('Failed to create processing session');
  }
};

/**
 * Enhanced transcription with retry and graceful failure handling
 */
const transcribeChunkWithRetry = async (chunkPath, chunkIndex, userId, sessionId, maxRetries = 3, baseDelay = 1000) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🎙️ [User ${userId}][Session ${sessionId}] Transcribing chunk ${chunkIndex + 1}, attempt ${attempt}/${maxRetries}...`);

      const transcription = await openaiOriginal.audio.transcriptions.create({
        file: fs.createReadStream(chunkPath),
        model: "whisper-1",
        response_format: "text",
      });
      console.log(`✅ [User ${userId}][Session ${sessionId}] Chunk ${chunkIndex + 1} completed on attempt ${attempt}`);
      return {
        success: true,
        transcript: transcription.trim(),
        chunkIndex,
        error: null
      };
    } catch (error) {
      lastError = error;
      console.error(`❌ [User ${userId}][Session ${sessionId}] Attempt ${attempt} failed for chunk ${chunkIndex + 1}:`, error.message);

      if (attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000;
        console.log(`⏳ [User ${userId}][Session ${sessionId}] Waiting ${Math.round(delay)}ms before retry...`);
        await sleep(delay);
      }
    }
  }

  console.error(`🔥 [User ${userId}][Session ${sessionId}] All ${maxRetries} attempts failed for chunk ${chunkIndex + 1}`);
  return {
    success: false,
    transcript: `[Transcription failed for segment ${chunkIndex + 1}: ${lastError.message}]`,
    chunkIndex,
    error: lastError.message
  };
};

/**
 * Enhanced chunk transcription with partial success handling
 */
const transcribeChunksEnhanced = async (chunkPaths, userId, sessionId, options = {}) => {
  const {
    maxRetries = 3,
    concurrency = 2,
    allowPartialFailure = true,
  } = options;

  const transcriptResults = new Array(chunkPaths.length).fill(null);
  const failedChunks = [];
  const successfulChunks = [];

  console.log(`📝 [User ${userId}][Session ${sessionId}] Starting transcription of ${chunkPaths.length} chunks with concurrency: ${concurrency}`);

  for (let i = 0; i < chunkPaths.length; i += concurrency) {
    const batch = chunkPaths.slice(i, i + concurrency);
    const batchPromises = batch.map(async (chunkPath, batchIndex) => {
      const actualIndex = i + batchIndex;

      const result = await transcribeChunkWithRetry(
        chunkPath,
        actualIndex,
        userId,
        sessionId,
        maxRetries
      );

      transcriptResults[actualIndex] = result;

      if (result.success) {
        successfulChunks.push(result);
      } else {
        failedChunks.push(result);
      }

      return result;
    });

    const batchResults = await Promise.all(batchPromises);
    const successCount = batchResults.filter((r) => r.success).length;
    console.log(`✅ [User ${userId}][Session ${sessionId}] Batch ${Math.floor(i / concurrency) + 1} completed: ${successCount}/${batch.length} successful`);

    if (i + concurrency < chunkPaths.length) {
      await sleep(500);
    }
  }

  const successfulCount = successfulChunks.length;
  const totalChunks = chunkPaths.length;

  console.log(`🎯 [User ${userId}][Session ${sessionId}] Transcription Summary: ${successfulCount}/${totalChunks} chunks successful`);

  if (failedChunks.length > 0) {
    console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed chunks:`, failedChunks.map((f) => f.chunkIndex + 1));
  }

  // Always return results, even if some chunks failed
  const combinedTranscript = transcriptResults
    .filter(result => result !== null)
    .map(result => result.transcript)
    .join(" ");

  return {
    success: successfulCount > 0, // Success if at least one chunk worked
    transcript: combinedTranscript,
    totalChunks,
    successfulChunks: successfulCount,
    failedChunks: failedChunks.length,
    errors: failedChunks.map(f => ({ chunkIndex: f.chunkIndex, error: f.error })),
    partialResult: failedChunks.length > 0 && successfulCount > 0
  };
};

const processTranscriptWithAI = async (transcription, userId, sessionId) => {
  const processingResults = {
    formattedTranscription: null,
    mainData: null,
    extraData: null,
    errors: []
  };

  // Step 1: Format transcript with speakers
  try {
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Formatting transcript with speakers...`);
    processingResults.formattedTranscription = await formatTranscriptWithSpeakers(transcription);
    console.log(`✅ [User ${userId}][Session ${sessionId}] Transcript formatting completed`);
  } catch (error) {
    console.error(`❌ [User ${userId}][Session ${sessionId}] Speaker formatting failed:`, error.message);
    processingResults.errors.push({ step: 'speaker_formatting', error: error.message });

    // Fallback: create basic format from raw transcription
    processingResults.formattedTranscription = [{
      speaker: "Unknown",
      text: transcription
    }];
  }

  // Step 2: Extract comprehensive meeting data using new approach
  try {
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Extracting comprehensive meeting data...`);
    processingResults.comprehensiveData = await extractComprehensiveMeetingData(processingResults.formattedTranscription);
    console.log(`✅ [User ${userId}][Session ${sessionId}] Comprehensive data extraction completed`);
    console.log('Comprehensive data:', processingResults.comprehensiveData);
  } catch (error) {
    console.error(`❌ [User ${userId}][Session ${sessionId}] Comprehensive data extraction failed:`, error.message);
    processingResults.errors.push({ step: 'comprehensive_data_extraction', error: error.message });

    // Fallback: create basic structure
    processingResults.comprehensiveData = {
      basicInfo: {
        title: "Meeting Recording",
        participants: [],
        agenda: [],
        summary: "Summary generation failed. Raw transcript is available.",
        meetingType: 'general'
      },
      minutes: [],
      nextSteps: [],
      projects: [],
      keyInitiatives: [],
      challengesAndRisks: [],
      decisionsMade: [],
      implementationPlan: null,
      hasActionItems: false,
      hasProjects: false,
      hasDecisions: false,
      hasImplementationPlan: false,
      hasChallengesRisks: false,
      hasKeyInitiatives: false,
      meetingType: 'general'
    };
  }

  return processingResults;
};

/**
 * Create meeting data object from comprehensive extraction results
 */
const createMeetingDataFromComprehensive = (comprehensiveData, formattedTranscription, defaultTitle = "Meeting Session") => {
  const basicInfo = comprehensiveData.basicInfo || {};

  return {
    // Basic info
    title: basicInfo.title || defaultTitle,
    participants: basicInfo.participants || [],
    agenda: basicInfo.agenda || [],
    summary: basicInfo.summary || "Summary not available",
    meetingType: comprehensiveData.meetingType || basicInfo.meetingType || 'general',

    // Formatted transcript
    transcript: formattedTranscription.filter(t => t.text && t.text.trim() !== ""),

    // Core meeting content
    minutes: comprehensiveData.minutes || [],
    nextSteps: comprehensiveData.nextSteps || [],

    // NEW: Enhanced content
    projects: comprehensiveData.projects || [],
    keyInitiatives: comprehensiveData.keyInitiatives || [],
    implementationPlan: comprehensiveData.implementationPlan,
    challengesAndRisks: comprehensiveData.challengesAndRisks || [],
    decisionsMade: comprehensiveData.decisionsMade || [],

    // Boolean flags
    hasActionItems: comprehensiveData.hasActionItems || false,
    hasProjects: comprehensiveData.hasProjects || false,
    hasDecisions: comprehensiveData.hasDecisions || false,
    hasImplementationPlan: comprehensiveData.hasImplementationPlan || false,
    hasChallengesRisks: comprehensiveData.hasChallengesRisks || false,
    hasKeyInitiatives: comprehensiveData.hasKeyInitiatives || false
  };
};


const splitAudioIntoChunks = async (inputPath, chunkDuration, userTempDir, userId, sessionId) => {
  const duration = await getAudioDuration(inputPath);
  const chunks = [];

  if (duration <= chunkDuration) {
    return [inputPath];
  }

  const numChunks = Math.ceil(duration / chunkDuration);
  console.log(`🔄 [User ${userId}][Session ${sessionId}] Splitting ${Math.round(duration)}s audio into ${numChunks} chunks...`);

  for (let i = 0; i < numChunks; i++) {
    const startTime = i * chunkDuration;
    const chunkPath = path.join(userTempDir, `chunk_${i}.wav`);

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .seekInput(startTime)
        .duration(chunkDuration)
        .audioChannels(1)
        .audioFrequency(16000)
        .toFormat("wav")
        .on("end", resolve)
        .on("error", reject)
        .save(chunkPath);
    });

    chunks.push(chunkPath);
  }

  console.log(`📂 [User ${userId}][Session ${sessionId}] Created ${chunks.length} chunks`);
  return chunks;
};

const getAudioDuration = (filePath) => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        resolve(metadata.format.duration);
      }
    });
  });
};

/**
 * Enhanced user usage update with error handling
 */
const updateUserUsage = async (userId, durationSeconds, meetingType) => {
  // First get the user with their plan populated
  const user = await User.findById(userId).populate('plan');
  if (!user) {
    throw new Error('User not found');
  }
  const updateFields = {
    $inc: {
      totalSecondsUsed: durationSeconds
    }
  };

  switch (meetingType) {
    case 'live-transcription':
      updateFields.$inc.liveTranscriptionSecondsUsed = durationSeconds;
      break;
    case 'audio-notes':
      updateFields.$inc.audioNotesSecondsUsed = durationSeconds;
      break;
    case 'recording':
    default:
      updateFields.$inc.recordingSecondsUsed = durationSeconds;
      break;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateFields,
      { new: true });
    // Check if user has exceeded their plan limits
    if (user?.plan) {
      const totalMinutesUsed = Math.ceil(updatedUser.totalSecondsUsed / 60);
      const planMinutesLimit = user.plan.minutes;

      if (totalMinutesUsed >= planMinutesLimit) {
        // User has reached or exceeded their plan limit
        await User.findByIdAndUpdate(userId, {
          hasExceededPlanLimit: true
        });
        console.log(`⚠️ [User ${userId}] Plan limit reached (${totalMinutesUsed}/${planMinutesLimit} minutes)`);
      } else if (updatedUser.hasExceededPlanLimit && totalMinutesUsed < planMinutesLimit) {
        // User was over limit but now is under (maybe they upgraded)
        await User.findByIdAndUpdate(userId, {
          hasExceededPlanLimit: false
        });
      }
    }
    console.log(`✅ [User ${userId}] Updated usage: +${durationSeconds}s for ${meetingType}`);
    return updatedUser;
  } catch (error) {
    console.error(`❌ [User ${userId}] Failed to update usage:`, error);
    throw error;
  }
};

/**
 * Enhanced audio notes processing with graceful error handling
 */
const processAudioNotes = async (req, user, durationInSeconds, userSession) => {
  const { userId, sessionId, userTempDir } = userSession;

  if (!req.file) {
    throw new Error("No audio file provided");
  }

  const audioFile = req.file;
  console.log(`🎵 [User ${userId}][Session ${sessionId}] Processing audio notes - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

  const wavPath = path.join(userTempDir, "converted_audio.wav");
  const processingErrors = [];

  try {
    // Convert to WAV format
    console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
    await new Promise((resolve, reject) => {
      ffmpeg(audioFile.path)
        .audioChannels(1)
        .audioFrequency(16000)
        .toFormat("wav")
        .on("end", resolve)
        .on("error", reject)
        .save(wavPath);
    });

    // Upload original file to S3
    const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
    const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

    // Check duration and split if necessary
    console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
    const audioDurationSeconds = await getAudioDuration(wavPath);
    const CHUNK_DURATION = 180;
    let chunkPaths;

    if (audioDurationSeconds > CHUNK_DURATION) {
      chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
    } else {
      console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
      chunkPaths = [wavPath];
    }

    // Transcribe audio with enhanced error handling
    console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
    const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
      maxRetries: 3,
      concurrency: 2,
      allowPartialFailure: true,
    });

    // Check if we got any transcription at all
    if (!transcriptionResult.success || !transcriptionResult.transcript) {
      throw new Error("Complete transcription failure - no audio could be processed");
    }

    // Add transcription warnings if partial failure
    if (transcriptionResult.partialResult) {
      processingErrors.push({
        type: 'transcription_partial_failure',
        message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
        details: transcriptionResult.errors
      });
    }

    // Process with AI (with graceful error handling)
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
    const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

    // Add AI processing errors to our error list
    if (aiResults.errors.length > 0) {
      processingErrors.push({
        type: 'ai_processing_errors',
        message: 'Some AI processing steps failed',
        details: aiResults.errors
      });
    }

    // Create meeting data using comprehensive extraction
    const meetingData = createMeetingDataFromComprehensive(
      aiResults.comprehensiveData,
      aiResults.formattedTranscription,
      "Audio Notes Session"
    );

    // Parse due dates for next steps
    const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
      ...step,
      parsedDueDate: parseDueDate(step.due, new Date()),
      reminderSent: false,
      reminderSentAt: null
    }));

    // Save to database with all new fields
    const savedMeeting = await meetingSchema.create({
      user: userId,

      // Basic info
      title: meetingData.title,
      participants: meetingData.participants,
      agenda: meetingData.agenda,
      summary: meetingData.summary,
      meetingType: meetingData.meetingType,

      // Core content
      transcript: meetingData.transcript,
      minutes: meetingData.minutes,
      nextSteps: nextStepsWithParsedDates,

      // NEW: Enhanced content
      projects: meetingData.projects,
      keyInitiatives: meetingData.keyInitiatives,
      implementationPlan: meetingData.implementationPlan,
      challengesAndRisks: meetingData.challengesAndRisks,
      decisionsMade: meetingData.decisionsMade,

      // Boolean flags
      hasActionItems: meetingData.hasActionItems,
      hasProjects: meetingData.hasProjects,
      hasDecisions: meetingData.hasDecisions,
      hasImplementationPlan: meetingData.hasImplementationPlan,
      hasChallengesRisks: meetingData.hasChallengesRisks,
      hasKeyInitiatives: meetingData.hasKeyInitiatives,

      // Technical fields
      recordingLength: durationInSeconds,
      recordingAudioUrl: uploadedAudioUrl,
      type: "audio-notes",
      processingMethod: "whisper-chunks",
      processingErrors: processingErrors.length > 0 ? processingErrors : undefined
    });

    // Update user usage
    await updateUserUsage(userId, durationInSeconds, 'audio-notes');

    console.log(`✅ [User ${userId}][Session ${sessionId}] Audio notes processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

    return {
      success: true,
      meeting: savedMeeting,
      warnings: processingErrors.length > 0 ? processingErrors : undefined,
      partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0
    };

  } finally {
    // Clean up uploaded file
    try {
      if (fs.existsSync(audioFile.path)) {
        fs.unlinkSync(audioFile.path);
        console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
      }
    } catch (error) {
      console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
    }
  }
};

/**
 * Enhanced regular recording processing with graceful error handling
 */
const processRegularRecording = async (req, user, durationInSeconds, userSession, emails) => {
  const { userId, sessionId, userTempDir } = userSession;

  if (!req.file) {
    throw new Error("No audio file provided");
  }

  const { videoUrl } = req.body;
  if (!videoUrl) {
    throw new Error("Missing video URL");
  }

  const audioFile = req.file;
  console.log(`🎬 [User ${userId}][Session ${sessionId}] Processing screen recording - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

  const processingErrors = [];

  // Parse email recipients
  let emailRecipients = [];
  if (emails) {
    try {
      emailRecipients = JSON.parse(emails);
      console.log(`📧 [User ${userId}][Session ${sessionId}] Email recipients: ${emailRecipients.length} addresses`);
    } catch (error) {
      console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed to parse emails, proceeding without email recipients`);
      emailRecipients = [];
      processingErrors.push({
        type: 'email_parsing_error',
        message: 'Failed to parse email recipients',
        details: error.message
      });
    }
  }

  const wavPath = path.join(userTempDir, "converted_audio.wav");

  try {
    // Convert to WAV format
    console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
    await new Promise((resolve, reject) => {
      ffmpeg(audioFile.path)
        .audioChannels(1)
        .audioFrequency(16000)
        .toFormat("wav")
        .on("end", resolve)
        .on("error", reject)
        .save(wavPath);
    });

    // Upload original file to S3
    const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
    const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

    // Check duration and split if necessary
    console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
    const audioDurationSeconds = await getAudioDuration(wavPath);
    const CHUNK_DURATION = 180;
    let chunkPaths;

    if (audioDurationSeconds > CHUNK_DURATION) {
      chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
    } else {
      console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
      chunkPaths = [wavPath];
    }

    // Transcribe audio
    console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
    const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
      maxRetries: 3,
      concurrency: 2,
      allowPartialFailure: true,
    });

    // Check if we got any transcription at all
    if (!transcriptionResult.success || !transcriptionResult.transcript) {
      throw new Error("Complete transcription failure - no audio could be processed");
    }

    // Add transcription warnings if partial failure
    if (transcriptionResult.partialResult) {
      processingErrors.push({
        type: 'transcription_partial_failure',
        message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
        details: transcriptionResult.errors
      });
    }

    // Process with AI
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
    const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

    // Add AI processing errors to our error list
    if (aiResults.errors.length > 0) {
      processingErrors.push({
        type: 'ai_processing_errors',
        message: 'Some AI processing steps failed',
        details: aiResults.errors
      });
    }

    // Create meeting data using comprehensive extraction
    const meetingData = createMeetingDataFromComprehensive(
      aiResults.comprehensiveData,
      aiResults.formattedTranscription,
      "Team Meeting"
    );

    // Parse due dates for next steps
    const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
      ...step,
      parsedDueDate: parseDueDate(step.due, new Date()),
      reminderSent: false,
      reminderSentAt: null
    }));

    // Save to database with all new fields
    const savedMeeting = await meetingSchema.create({
      user: userId,

      // Basic info
      title: meetingData.title,
      participants: meetingData.participants,
      agenda: meetingData.agenda,
      summary: meetingData.summary,
      meetingType: meetingData.meetingType,

      // Core content
      transcript: meetingData.transcript,
      minutes: meetingData.minutes,
      nextSteps: nextStepsWithParsedDates,

      // NEW: Enhanced content
      projects: meetingData.projects,
      keyInitiatives: meetingData.keyInitiatives,
      implementationPlan: meetingData.implementationPlan,
      challengesAndRisks: meetingData.challengesAndRisks,
      decisionsMade: meetingData.decisionsMade,

      // Boolean flags
      hasActionItems: meetingData.hasActionItems,
      hasProjects: meetingData.hasProjects,
      hasDecisions: meetingData.hasDecisions,
      hasImplementationPlan: meetingData.hasImplementationPlan,
      hasChallengesRisks: meetingData.hasChallengesRisks,
      hasKeyInitiatives: meetingData.hasKeyInitiatives,

      // Technical fields
      recordingLength: durationInSeconds,
      recordingAudioUrl: uploadedAudioUrl,
      recordingVideoUrl: videoUrl,
      emailRecipients: emailRecipients,
      type: "recording",
      processingMethod: "whisper-chunks",
      processingErrors: processingErrors.length > 0 ? processingErrors : undefined
    });


    // Update user usage
    await updateUserUsage(userId, durationInSeconds, 'recording');

    console.log(`✅ [User ${userId}][Session ${sessionId}] Screen recording processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

    return {
      success: true,
      meeting: savedMeeting,
      warnings: processingErrors.length > 0 ? processingErrors : undefined,
      partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0
    };

  } finally {
    // Clean up uploaded file
    try {
      if (fs.existsSync(audioFile.path)) {
        fs.unlinkSync(audioFile.path);
        console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
      }
    } catch (error) {
      console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
    }
  }
};

// Generate presigned URL for video upload
const generatePresignedUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    const user = req.user;

    if (!fileName || !fileType) {
      return res
        .status(400)
        .json({ error: "fileName and fileType are required" });
    }

    const mediaKey = `meetings/media/${user._id}/${Date.now()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: mediaKey,
      ContentType: fileType,
      ACL: "private",
    });

    // Generate presigned URL that expires in 10 minutes
    const presignedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 600,
    });

    const videoUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${mediaKey}`;

    res.json({
      success: true,
      presignedUrl,
      videoUrl,
      videoKey: mediaKey,
    });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    res.status(500).json({ error: "Failed to generate upload URL" });
  }
};


const generateMeetingData = async (req, res) => {
  const userId = req.user._id;
  let userSession = null;
  let savedMeeting = null;

  try {
    const {
      duration,
      emails,
      videoUrl,
      videoKey,
      type,
      liveTranscripts,
      audioUrl,
      scheduledMeetingId, // NEW: Check for scheduled meeting ID
      fromScheduled,
    } = req.body;
    console.log(`🚀 [User ${userId}] Starting meeting processing - Type: ${type}`);

    // NEW: Log if this is from a scheduled meeting
    if (fromScheduled === "true" && scheduledMeetingId) {
      console.log(`📅 [User ${userId}] Processing scheduled meeting recording: ${scheduledMeetingId}`);
    }

    const user = await User.findById(userId).populate('plan');
    if (!user) {
      throw new Error('User not found');
    }
    // Validate duration
    const durationInSeconds = parseInt(duration) || 0;
    if (durationInSeconds <= 0) {
      return res.status(400).json({
        error: "Invalid duration provided"
      });
    }

    // Usage limit validation
    const planMinutesLimit = user.plan?.minutes || 100;
    const MAX_SECONDS_ALLOWED = planMinutesLimit * 60; // 100 minutes
    const currentTotalUsage = user.totalSecondsUsed || 0;
    const remainingSeconds = MAX_SECONDS_ALLOWED - currentTotalUsage;

    if (user?.hasExceededPlanLimit) {
      return res.status(403).json({
        error: "Plan limit exceeded",
        message: "You have reached your plan's minute limit. Please upgrade to continue recording.",
        currentUsage: Math.round(currentTotalUsage / 60),
        maxMinutes: planMinutesLimit,
        remainingMinutes: 0,
        hasExceededPlanLimit: true
      });
    }

    if (currentTotalUsage >= MAX_SECONDS_ALLOWED) {
      await User.findByIdAndUpdate(userId, {
        hasExceededPlanLimit: true
      });
      return res.status(403).json({
        error: "Usage limit exceeded",
        message: "You have reached your plan's minute limit. Please upgrade to continue recording.",
        currentUsage: Math.round(currentTotalUsage / 60),
        maxMinutes: planMinutesLimit,
        remainingMinutes: 0,
        hasExceededPlanLimit: true
      });
    }

    if (durationInSeconds > remainingSeconds) {
      return res.status(403).json({
        error: "Recording would exceed usage limit",
        message: `This recording (${Math.round(durationInSeconds / 60)} minutes) would exceed your remaining limit of ${Math.round(remainingSeconds / 60)} minutes.`,
        currentUsage: Math.round(currentTotalUsage / 60),
        maxMinutes: 100,
        remainingMinutes: Math.round(remainingSeconds / 60),
        requestedMinutes: Math.round(durationInSeconds / 60)
      });
    }


    // **EXTENSION RECORDING FLOW**
    if (type === "extension-recording") {
      console.log(`🎬 [User ${userId}] Processing extension recording`);
      
      try {
        const result = await processExtensionRecording(req, userId);
        
        return res.json({
          success: true,
          meeting: result.meeting,
          meetingId: result.meetingId,
          warnings: result.warnings,
          partialResult: result.partialResult,
          usage: result.usage
        });
      } catch (error) {
        console.error(`❌ [User ${userId}] Extension recording failed:`, error);
        return res.status(500).json({
          error: "Processing failed",
          message: error.message || "Failed to process extension recording"
        });
      }
    }
    // **NEW: Handle live transcripts for recordings and audio notes**
    if ((type === "recording-with-live-transcripts" || type === "audio-notes-with-live-transcripts") && liveTranscripts) {
      console.log(`🎙️ [User ${userId}] Processing ${type} with live transcripts (${JSON.parse(liveTranscripts).length} items)`);

      // Parse live transcripts
      let parsedTranscripts;
      try {
        parsedTranscripts = typeof liveTranscripts === "string" ? JSON.parse(liveTranscripts) : liveTranscripts;
      } catch (error) {
        return res.status(400).json({ error: "Invalid live transcripts format" });
      }

      // Convert to our format
      const formattedTranscription = parsedTranscripts.map((transcript) => ({
        speaker: transcript.speaker || "Unknown",
        text: transcript.text || "",
      }));

      // Process with AI (same as live transcription)
      const aiResults = await processTranscriptWithAI(
        formattedTranscription.map(t => t.text).join(" "),
        userId,
        'live-session'
      );

      const processingErrors = [];
      if (aiResults.errors.length > 0) {
        processingErrors.push({
          type: 'ai_processing_errors',
          message: 'Some AI processing steps failed',
          details: aiResults.errors
        });
      }

      // Handle audio file upload to S3
      let uploadedAudioUrl = null;
      if (req.file) {
        try {
          const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(req.file.originalname)}`;
          uploadedAudioUrl = await uploadToS3(req.file.path, audioKey, "audio/webm");

          // Clean up uploaded file
          if (fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
          }
        } catch (uploadError) {
          console.error(`❌ [User ${userId}] Failed to upload audio to S3:`, uploadError);
          processingErrors.push({
            type: 'audio_upload_error',
            message: 'Failed to upload audio file',
            details: uploadError.message
          });
        }
      }

      // Parse email recipients for recordings
      let emailRecipients = [];
      if (type === "recording-with-live-transcripts" && emails) {
        try {
          emailRecipients = JSON.parse(emails);
          console.log(`📧 [User ${userId}] Email recipients: ${emailRecipients.length} addresses`);
        } catch (error) {
          console.warn(`⚠️ [User ${userId}] Failed to parse emails`);
          processingErrors.push({
            type: 'email_parsing_error',
            message: 'Failed to parse email recipients',
            details: error.message
          });
        }
      }

      const meetingData = {
        title: aiResults.mainData.title || (type === "recording-with-live-transcripts" ? "Team Meeting" : "Audio Notes Session"),
        participants: aiResults.mainData.participants || [],
        agenda: aiResults.mainData.agenda || [],
        summary: aiResults.mainData.summary || "Summary not available",
        transcript: aiResults.formattedTranscription.filter(t => t.text && t.text.trim() !== ""),
        minutes: aiResults.extraData.minutes || [],
        nextSteps: aiResults.extraData.nextSteps || [],
        emailRecipients: emailRecipients,
      };

      // Parse due dates for reminder system
      const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
        ...step,
        parsedDueDate: parseDueDate(step.due, new Date()),
        reminderSent: false,
        reminderSentAt: null
      }));

      // Save to database
      const meetingType = type === "recording-with-live-transcripts" ? "recording" : "audio-notes";
      savedMeeting = await meetingSchema.create({
        user: userId,
        title: meetingData.title,
        participants: meetingData.participants,
        agenda: meetingData.agenda,
        summary: meetingData.summary,
        transcript: meetingData.transcript,
        minutes: meetingData.minutes,
        nextSteps: nextStepsWithParsedDates,
        recordingLength: durationInSeconds,
        recordingAudioUrl: uploadedAudioUrl,
        recordingVideoUrl: type === "recording-with-live-transcripts" ? videoUrl : undefined,
        emailRecipients: emailRecipients,
        type: meetingType,
        processingMethod: "deepgram-live", // NEW: Track processing method
        processingErrors: processingErrors.length > 0 ? processingErrors : undefined
      });

      // Log parsed dates for debugging
      if (nextStepsWithParsedDates.length > 0) {
        console.log(`📅 [User ${userId}] Parsed ${nextStepsWithParsedDates.length} task due dates:`);
        nextStepsWithParsedDates.forEach(step => {
          console.log(`  - "${step.task}" (${step.assignee}) - Due: "${step.due}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
        });
      }

      // Check for tasks due TODAY and send immediate reminder
      const todaysTasks = nextStepsWithParsedDates.filter(step => {
        if (!step.parsedDueDate) return false;
        const today = new Date();
        const taskDate = new Date(step.parsedDueDate);
        return taskDate.toDateString() === today.toDateString();
      });

      if (todaysTasks.length > 0) {
        console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);
        try {
          await sendTaskReminderEmail({
            ...savedMeeting.toObject(),
            user: user
          }, todaysTasks);

          todaysTasks.forEach(task => {
            task.reminderSent = true;
            task.reminderSentAt = new Date();
          });
          await savedMeeting.save();

          console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
        } catch (emailError) {
          console.error('Failed to send immediate reminder:', emailError);
        }
      }

      // Update user usage
      const usageType = type === "recording-with-live-transcripts" ? 'recording' : 'audio-notes';
      await updateUserUsage(userId, durationInSeconds, usageType);

      // Create history record
      await historyModel.create({
        user: userId,
        action: 'created',
        targetType: 'Meeting',
        targetId: savedMeeting._id,
        details: {
          meeting: {
            title: savedMeeting.title,
            type: savedMeeting.type,
            participants: savedMeeting.participants,
            recordingLength: durationInSeconds,
            recordingLengthMinutes: Math.round(durationInSeconds / 60),
            transcriptItems: savedMeeting.transcript.length,
            minutesItems: savedMeeting.minutes.length,
            nextStepsItems: savedMeeting.nextSteps.length,
            nextStepsWithDates: nextStepsWithParsedDates.filter(s => s.parsedDueDate).length,
            hasProcessingErrors: processingErrors.length > 0,
            processingErrorCount: processingErrors.length
          },
          creator: {
            userId: user._id,
            userName: user.name || user.username,
            userEmail: user.email
          },
          processing: {
            method: 'deepgram-live',
            originalTranscriptItems: parsedTranscripts.length,
            aiProcessingErrors: aiResults.errors.length,
            partialResult: aiResults.errors.length > 0,
            hasVideo: type === "recording-with-live-transcripts",
            hasEmails: emailRecipients.length > 0
          },
          usage: {
            usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
            remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
          }
        }
      });

      console.log(`✅ [User ${userId}] ${type} processing completed with live transcripts ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

      return res.json({
        success: true,
        meeting: savedMeeting,
        warnings: processingErrors.length > 0 ? processingErrors : undefined,
        partialResult: aiResults.errors.length > 0,
        usage: {
          usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
          remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
          maxMinutes: 100
        }
      });
    }

    // Handle live transcription case with enhanced error handling
    if (type === "live-transcription") {
      if (!audioUrl || !liveTranscripts || !duration) {
        return res.status(400).json({
          error: "Missing required data for live transcription (audioUrl, liveTranscripts, duration)",
        });
      }

      console.log(`🎙️ [User ${userId}] Processing live transcription with ${liveTranscripts.length} transcript items (${Math.round(durationInSeconds / 60)} minutes)`);
      const processingErrors = [];

      // Parse live transcripts
      let parsedTranscripts;
      try {
        parsedTranscripts = typeof liveTranscripts === "string" ? JSON.parse(liveTranscripts) : liveTranscripts;
      } catch (error) {
        return res.status(400).json({ error: "Invalid live transcripts format" });
      }

      // Convert to our format
      const formattedTranscription = parsedTranscripts.map((transcript) => ({
        speaker: transcript.speaker || "Unknown",
        text: transcript.text || "",
      }));

      // Process with AI (with graceful error handling)
      const aiResults = await processTranscriptWithAI(
        formattedTranscription.map(t => t.text).join(" "),
        userId,
        'live-session'
      );

      // Add AI processing errors to our error list
      if (aiResults.errors.length > 0) {
        processingErrors.push({
          type: 'ai_processing_errors',
          message: 'Some AI processing steps failed',
          details: aiResults.errors
        });
      }

      const meetingData = {
        title: aiResults.mainData.title || "Live Transcription Session",
        participants: aiResults.mainData.participants || [],
        agenda: aiResults.mainData.agenda || [],
        summary: aiResults.mainData.summary || "Summary not available",
        transcript: aiResults.formattedTranscription.filter(t => t.text && t.text.trim() !== ""),
        minutes: aiResults.extraData.minutes || [],
        nextSteps: aiResults.extraData.nextSteps || [],
      };

      // ===== NEW: Parse due dates for reminder system =====
      const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
        ...step,
        parsedDueDate: parseDueDate(step.due, new Date()),
        reminderSent: false,
        reminderSentAt: null
      }));

      // Save to database
      savedMeeting = await meetingSchema.create({
        user: userId,
        title: meetingData.title,
        participants: meetingData.participants,
        agenda: meetingData.agenda,
        summary: meetingData.summary,
        transcript: meetingData.transcript,
        minutes: meetingData.minutes,
        nextSteps: nextStepsWithParsedDates, // Use parsed dates
        recordingLength: durationInSeconds,
        recordingAudioUrl: audioUrl,
        type: "live-transcription",
        processingErrors: processingErrors.length > 0 ? processingErrors : undefined
      });

      // ===== NEW: Log parsed dates for debugging =====
      if (nextStepsWithParsedDates.length > 0) {
        console.log(`📅 [User ${userId}] Parsed ${nextStepsWithParsedDates.length} task due dates:`);
        nextStepsWithParsedDates.forEach(step => {
          console.log(`  - "${step.task}" (${step.assignee}) - Due: "${step.due}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
        });
      }

      // ===== NEW: Check for tasks due TODAY and send immediate reminder =====
      const todaysTasks = nextStepsWithParsedDates.filter(step => {
        if (!step.parsedDueDate) return false;
        const today = new Date();
        const taskDate = new Date(step.parsedDueDate);
        return taskDate.toDateString() === today.toDateString();
      });

      // Add this debug logging before sending the email
      console.log('🔍 DEBUG: Meeting object:', {
        title: savedMeeting.title,
        hasUser: !!savedMeeting.user,
        userType: typeof savedMeeting.user,
        userEmail: savedMeeting.user?.email || 'NO EMAIL'
      });

      if (todaysTasks.length > 0) {
        console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);

        // Send immediate email for today's tasks
        try {
          await sendTaskReminderEmail({
            ...savedMeeting.toObject(),
            user: user  // Use the user from req.user which has the email
          }, todaysTasks);

          // Mark as reminded
          todaysTasks.forEach(task => {
            task.reminderSent = true;
            task.reminderSentAt = new Date();
          });
          await savedMeeting.save();

          console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
        } catch (emailError) {
          console.error('Failed to send immediate reminder:', emailError);
        }
      }

      // Update user usage
      await updateUserUsage(userId, durationInSeconds, 'live-transcription');

      // Create history record for meeting creation
      await historyModel.create({
        user: userId,
        action: 'created',
        targetType: 'Meeting',
        targetId: savedMeeting._id,
        details: {
          meeting: {
            title: savedMeeting.title,
            type: savedMeeting.type,
            participants: savedMeeting.participants,
            recordingLength: durationInSeconds,
            recordingLengthMinutes: Math.round(durationInSeconds / 60),
            transcriptItems: savedMeeting.transcript.length,
            minutesItems: savedMeeting.minutes.length,
            nextStepsItems: savedMeeting.nextSteps.length,
            nextStepsWithDates: nextStepsWithParsedDates.filter(s => s.parsedDueDate).length, // NEW
            hasProcessingErrors: processingErrors.length > 0,
            processingErrorCount: processingErrors.length
          },
          creator: {
            userId: user._id,
            userName: user.name || user.username,
            userEmail: user.email
          },
          processing: {
            method: 'live-transcription',
            originalTranscriptItems: parsedTranscripts.length,
            aiProcessingErrors: aiResults.errors.length,
            partialResult: aiResults.errors.length > 0
          },
          usage: {
            usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
            remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
          }
        }
      });

      console.log(`✅ [User ${userId}] Live transcription processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

      return res.json({
        success: true,
        meeting: savedMeeting,
        warnings: processingErrors.length > 0 ? processingErrors : undefined,
        partialResult: aiResults.errors.length > 0,
        usage: {
          usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
          remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
          maxMinutes: 100
        }
      });
    }

    // For file-based processing, create user session
    userSession = createUserSession(userId);
    const { sessionId, userTempDir, cleanup } = userSession;
    console.log(`📁 [User ${userId}][Session ${sessionId}] User session created`);

    let result;

    // Handle different processing types with enhanced error handling
    if (type === "audio-notes") {
      result = await processAudioNotes(req, user, durationInSeconds, { userId, sessionId, userTempDir });
    } else {
      // Regular recording - but check if it's from scheduled meeting
      if (fromScheduled === "true" && scheduledMeetingId) {
        // Process as regular recording but we'll update scheduled meeting instead of creating new
        result = await processScheduledMeetingRecording(req, user, durationInSeconds, { userId, sessionId, userTempDir }, emails, scheduledMeetingId);
      } else {
        // Regular recording
        result = await processRegularRecording(req, user, durationInSeconds, { userId, sessionId, userTempDir }, emails);
      }
    }

    // If we have a successful result with a meeting, create history
    if (result.success && result.meeting) {
      savedMeeting = result.meeting;

      // ===== NEW: Parse due dates for any type of meeting =====
      if (savedMeeting.nextSteps && savedMeeting.nextSteps.length > 0) {
        console.log(`📅 [User ${userId}] Parsing due dates for ${savedMeeting.nextSteps.length} tasks...`);

        // Parse due dates for each next step
        for (let i = 0; i < savedMeeting.nextSteps.length; i++) {
          const step = savedMeeting.nextSteps[i];
          const originalDue = step.due;
          step.parsedDueDate = parseDueDate(step.due, savedMeeting.createdAt);
          step.reminderSent = false;
          step.reminderSentAt = null;

          console.log(`  - "${step.task}" (${step.assignee}) - Due: "${originalDue}" → ${step.parsedDueDate ? step.parsedDueDate.toDateString() : 'No date'}`);
        }

        // Save the updated meeting with parsed dates
        await savedMeeting.save();
        console.log(`✅ [User ${userId}] Due dates parsed and saved for ${savedMeeting.nextSteps.filter(s => s.parsedDueDate).length} tasks`);

        // ===== NEW: Check for tasks due TODAY and send immediate reminder =====
        const todaysTasks = savedMeeting.nextSteps.filter(step => {
          if (!step.parsedDueDate) return false;
          const today = new Date();
          const taskDate = new Date(step.parsedDueDate);
          return taskDate.toDateString() === today.toDateString();
        });
        // Add this debug logging before sending the email
        console.log('🔍 DEBUG: Meeting object:', {
          title: savedMeeting.title,
          hasUser: !!savedMeeting.user,
          userType: typeof savedMeeting.user,
          userEmail: savedMeeting.user?.email || 'NO EMAIL'
        });
        if (todaysTasks.length > 0) {
          console.log(`⚡ [User ${userId}] Found ${todaysTasks.length} tasks due TODAY - sending immediate reminder`);

          // Send immediate email for today's tasks
          try {
            await sendTaskReminderEmail({
              ...savedMeeting.toObject(),
              user: user  // Use the user from req.user which has the email
            }, todaysTasks);

            // Mark as reminded
            todaysTasks.forEach(task => {
              task.reminderSent = true;
              task.reminderSentAt = new Date();
            });
            await savedMeeting.save();

            console.log(`📧 [User ${userId}] Immediate reminder sent for today's tasks`);
          } catch (emailError) {
            console.error('Failed to send immediate reminder:', emailError);
          }
        }
      }

      const historyAction = fromScheduled === "true" ? 'completed_scheduled_meeting' : 'created';

      await historyModel.create({
        user: userId,
        action: historyAction,
        targetType: 'Meeting',
        targetId: savedMeeting._id,
        details: {
          meeting: {
            title: savedMeeting.title,
            type: savedMeeting.type,
            participants: savedMeeting.participants || [],
            recordingLength: durationInSeconds,
            recordingLengthMinutes: Math.round(durationInSeconds / 60),
            transcriptItems: savedMeeting.transcript ? savedMeeting.transcript.length : 0,
            minutesItems: savedMeeting.minutes ? savedMeeting.minutes.length : 0,
            nextStepsItems: savedMeeting.nextSteps ? savedMeeting.nextSteps.length : 0,
            nextStepsWithDates: savedMeeting.nextSteps ? savedMeeting.nextSteps.filter(s => s.parsedDueDate).length : 0, // NEW
            emailRecipients: savedMeeting.emailRecipients || [],
            hasVideo: !!savedMeeting.recordingVideoUrl,
            hasAudio: !!savedMeeting.recordingAudioUrl,
            hasWarnings: !!result.warnings,
            warningCount: result.warnings ? result.warnings.length : 0,
            wasScheduled: fromScheduled === "true", // NEW: Track if this was from scheduled meeting
            originalScheduledDateTime: fromScheduled === "true" ? savedMeeting.scheduledDateTime : null
          },
          creator: {
            userId: user._id,
            userName: user.name || user.username,
            userEmail: user.email
          },
          processing: {
            method: fromScheduled === "true" ? 'scheduled-meeting-recording' : type,
            sessionId: sessionId,
            hadVideo: !!videoUrl,
            hadEmails: !!(emails && emails.length > 0),
            partialResult: !!result.partialResult
          },
          usage: {
            usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
            remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
          }
        }
      });
    }

    // Clean up session
    cleanup();

    // Return success response with warnings if any
    res.json({
      ...result,
      usage: {
        usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
        remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
        maxMinutes: 100
      }
    });

  } catch (error) {
    console.error(`💥 [User ${userId}] Error in generateMeetingData:`, error);

    // Always cleanup session on error
    if (userSession?.cleanup) {
      try {
        userSession.cleanup();
      } catch (cleanupError) {
        console.error(`❌ [User ${userId}] Failed to cleanup session:`, cleanupError);
      }
    }

    // Create history record for failed meeting creation
    try {
      await historyModel.create({
        user: userId,
        action: 'creation_failed',
        targetType: 'Meeting',
        targetId: null,
        details: {
          error: {
            message: error.message,
            type: type,
            duration: durationInSeconds,
            durationMinutes: Math.round(durationInSeconds / 60)
          },
          user: {
            userId: user._id,
            userName: user.name || user.username,
            userEmail: user.email
          },
          attemptedProcessing: {
            method: type,
            hadVideo: !!req.body.videoUrl,
            hadAudio: !!req.body.audioUrl,
            hadTranscripts: !!req.body.liveTranscripts
          },
          usage: {
            currentUsage: Math.round(currentTotalUsage / 60),
            remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage) / 60)
          }
        }
      });
    } catch (historyError) {
      console.error(`Failed to log error to history:`, historyError);
    }

    // Check if this is a complete failure or if we can return partial results
    if (error.message.includes("Complete transcription failure")) {
      res.status(500).json({
        error: "Complete processing failure",
        details: error.message,
        message: "No audio could be transcribed. Please try again with better audio quality."
      });
    } else {
      res.status(500).json({
        error: "Processing failed",
        details: error.message,
      });
    }
  }
};

const getMeetingData = async (req, res) => {
  const user = req.user;
  console.log("------------------");

  try {
    const meetingData = await meetingSchema
      .find({ user: user._id })
      .sort({ createdAt: -1 });
    res.json(meetingData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Data" });
  }
};

export const getLastTenMeetings = async (req, res) => {
  const user = req.user;
  try {
    const meetings = await meetingSchema
      .find({ user: user._id })
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(meetings);
  } catch (error) {
    console.error("Error fetching last ten meetings:", error);
    res.status(500).json({ error: "Failed to fetch last ten meetings" });
  }
};

const getSingleMeetingData = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  console.log(id);

  try {
    const meetingData = await meetingSchema
      .findOne({ _id: id });
    if (!meetingData) {
      return res.status(404).json({ error: "Meeting not found" });
    }
    res.json(meetingData);
  } catch (error) {
    console.error("Error fetching single meeting data:", error);
    res.status(500).json({ error: "Failed to fetch meeting data" });
  }
}

const getMeetingDetails = async (req, res) => {
  try {
    const meeting = await meetingSchema
      .findById(req.params.id)
      .populate("user", "username email")
      .lean();

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting recording not found",
      });
    }

    // Format data for frontend
    const response = {
      ...meeting,
      createdAt: new Date(meeting.createdAt).toLocaleString(),
      recordingLength: formatDuration(meeting.recordingLength),
    };

    res.json({
      success: true,
      meeting: response,
    });
  } catch (error) {
    console.error("Error fetching meeting details:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching meeting details",
    });
  }
};

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}
const deleteMeetingData = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  try {
    // Get meeting data before deletion for history
    const meeting = await meetingSchema.findById(id);
    if (!meeting) {
      return res.status(404).json({ error: "Meeting not found" });
    }

    // Store meeting data for history
    const deletedMeetingData = {
      title: meeting.title,
      type: meeting.type,
      participants: meeting.participants,
      recordingLength: meeting.recordingLength,
      recordingLengthMinutes: Math.round(meeting.recordingLength / 60),
      hasTranscript: meeting.transcript && meeting.transcript.length > 0,
      transcriptItems: meeting.transcript ? meeting.transcript.length : 0,
      hasMinutes: meeting.minutes && meeting.minutes.length > 0,
      minutesItems: meeting.minutes ? meeting.minutes.length : 0,
      hasNextSteps: meeting.nextSteps && meeting.nextSteps.length > 0,
      nextStepsItems: meeting.nextSteps ? meeting.nextSteps.length : 0,
      emailRecipients: meeting.emailRecipients || [],
      createdAt: meeting.createdAt,
      updatedAt: meeting.updatedAt
    };

    // Delete the meeting
    await meetingSchema.findByIdAndDelete(id);

    // Create history record for meeting deletion
    await historyModel.create({
      user: user._id,
      action: `deleted_${meeting.type.replace('-', '_')}_meeting`, // e.g., 'deleted_live_transcription_meeting', 'deleted_recording_meeting'
      targetType: 'Meeting',
      targetId: id,
      details: {
        deletedMeeting: deletedMeetingData,
        deletedBy: {
          userId: user._id,
          userName: user.name || user.username,
          userEmail: user.email
        },
        deletionReason: req.body?.reason || `User deleted ${meeting.type} meeting`,
        meetingType: meeting.type,
        summary: `Deleted ${meeting.type} meeting: "${meeting.title}" (${Math.round(meeting.recordingLength / 60)} minutes)`
      }
    });

    res.json({ success: true, message: "Meeting deleted successfully" });
  } catch (error) {
    console.error("Error deleting meeting data:", error);
    res.status(500).json({ error: "Failed to delete meeting data" });
  }
};


const getAnalyticsData = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('plan').lean();
    const planMinutes = user.plan?.minutes || 100;
    const MAX_SECONDS_ALLOWED = planMinutes * 60 || 6000; // 100 minutes

    const totalUsed = user.totalSecondsUsed || 0;
    const recordingUsed = user.recordingSecondsUsed || 0;
    const liveTranscriptionUsed = user.liveTranscriptionSecondsUsed || 0;
    const audioNotesUsed = user.audioNotesSecondsUsed || 0;

    // Convert seconds to minutes
    const totalUsedMinutes = Math.round(totalUsed / 60);
    const recordingMinutes = Math.round(recordingUsed / 60);
    const liveTranscriptionMinutes = Math.round(liveTranscriptionUsed / 60);
    const audioNotesMinutes = Math.round(audioNotesUsed / 60);

    // Calculate percentages based on max allowed (for overall usage)
    const calculateMaxPercentage = (usedSeconds) => {
      return Math.round((usedSeconds / MAX_SECONDS_ALLOWED) * 100);
    };

    // Get meetings from the last 30 days for daily usage analysis
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentMeetings = await meetingSchema
      .find({
        user: user._id,
        createdAt: { $gte: thirtyDaysAgo }
      })
      .sort({ createdAt: -1 })
      .lean();

    // Calculate daily usage breakdown
    const dailyUsage = {};
    const dayColors = [
      '#8B5CF6', '#EC4899', '#06B6D4', '#EF4444', '#10B981',
      '#F97316', '#8B5A3C', '#6B46C1', '#DC2626', '#059669',
      '#D97706', '#7C3AED', '#BE185D', '#0891B2', '#65A30D',
      '#CA8A04', '#9333EA', '#C2410C', '#0369A1', '#16A34A',
      '#EA580C', '#7C2D12', '#4338CA', '#BE123C', '#0F766E',
      '#92400E', '#581C87', '#A21CAF', '#155E75', '#166534'
    ];

    recentMeetings.forEach((meeting) => {
      const meetingDate = new Date(meeting.createdAt);
      const dateKey = meetingDate.toDateString();
      const durationMinutes = Math.round((meeting.recordingLength || 0) / 60);

      if (!dailyUsage[dateKey]) {
        dailyUsage[dateKey] = {
          date: dateKey,
          minutes: 0,
          meetings: []
        };
      }

      dailyUsage[dateKey].minutes += durationMinutes;
      dailyUsage[dateKey].meetings.push(meeting);
    });

    // Convert daily usage to chart format
    const dailyUsageArray = Object.values(dailyUsage)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-10); // Last 10 days that have usage

    const dailyUsageChartData = dailyUsageArray.map((day, index) => ({
      name: new Date(day.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      }),
      value: day.minutes,
      color: dayColors[index % dayColors.length],
      fullDate: day.date,
      meetingCount: day.meetings.length
    }));

    // Get meetings from the last week for the right chart
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyMeetings = await meetingSchema
      .find({
        user: user._id,
        createdAt: { $gte: oneWeekAgo }
      })
      .sort({ createdAt: -1 })
      .lean();

    // Group meetings by type for the right chart
    const meetingTypeColors = {
      'recording': '#8B5CF6',
      'live-transcription': '#EC4899',
      'audio-notes': '#06B6D4'
    };

    const weeklyMeetingsChartData = weeklyMeetings.map((meeting, index) => {
      const duration = Math.round((meeting.recordingLength || 0) / 60);
      const baseColor = meetingTypeColors[meeting.type] || '#6B7280';

      // If multiple meetings of same type, vary the shade slightly
      const sameTypeMeetings = weeklyMeetings.filter(m => m.type === meeting.type);
      const typeIndex = sameTypeMeetings.findIndex(m => m._id.toString() === meeting._id.toString());
      const opacity = 1 - (typeIndex * 0.1); // Slightly different shades for same type

      return {
        name: meeting.title.length > 20 ? meeting.title.substring(0, 20) + '...' : meeting.title,
        value: Math.max(duration, 1), // Minimum 1 minute for visibility
        color: baseColor,
        type: meeting.type,
        fullTitle: meeting.title,
        duration: duration,
        createdAt: meeting.createdAt,
        participants: meeting.participants?.length || 0,
        hasWarnings: meeting.processingErrors && meeting.processingErrors.length > 0
      };
    });

    // Format recent meetings for the table (last 10)
    const formattedRecentMeetings = recentMeetings.slice(0, 10).map(meeting => {
      const duration = meeting.recordingLength || 0;
      const durationMinutes = Math.floor(duration / 60);
      const durationSeconds = duration % 60;
      const formattedDuration = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;

      const primarySpeaker = meeting.participants && meeting.participants.length > 0
        ? meeting.participants[0]
        : 'Unknown';

      const createdAt = new Date(meeting.createdAt);
      const startTime = createdAt.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      const endTime = new Date(createdAt.getTime() + (duration * 1000)).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      return {
        id: meeting._id,
        title: meeting.title,
        totalTime: formattedDuration,
        startTime,
        endTime,
        speaker: primarySpeaker,
        type: meeting.type,
        date: createdAt.toLocaleDateString(),
        participants: meeting.participants?.length || 0,
        hasWarnings: meeting.processingErrors && meeting.processingErrors.length > 0,
        processingErrors: meeting.processingErrors
      };
    });

    // Overall usage statistics
    const overallStats = {
      totalUsedMinutes,
      totalUsedSeconds: totalUsed,
      remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - totalUsed) / 60),
      remainingSeconds: MAX_SECONDS_ALLOWED - totalUsed,
      percentageUsed: calculateMaxPercentage(totalUsed),
      maxMinutes: 100,
      breakdown: {
        recording: {
          minutes: recordingMinutes,
          seconds: recordingUsed,
          percentage: calculateMaxPercentage(recordingUsed)
        },
        liveTranscription: {
          minutes: liveTranscriptionMinutes,
          seconds: liveTranscriptionUsed,
          percentage: calculateMaxPercentage(liveTranscriptionUsed)
        },
        audioNotes: {
          minutes: audioNotesMinutes,
          seconds: audioNotesUsed,
          percentage: calculateMaxPercentage(audioNotesUsed)
        }
      }
    };

    // Meeting type counts
    const meetingCounts = {
      recording: recentMeetings.filter(m => m.type === 'recording').length,
      liveTranscription: recentMeetings.filter(m => m.type === 'live-transcription').length,
      audioNotes: recentMeetings.filter(m => m.type === 'audio-notes').length,
      total: recentMeetings.length,
      withWarnings: recentMeetings.filter(m => m.processingErrors && m.processingErrors.length > 0).length
    };

    res.json({
      success: true,
      analytics: {
        dailyUsageChartData, // For left chart - daily usage
        weeklyMeetingsChartData, // For right chart - recent meetings
        recentMeetings: formattedRecentMeetings, // For table
        overallStats,
        meetingCounts,
        hasUsage: totalUsed > 0,
        hasDailyUsage: dailyUsageChartData.length > 0,
        hasWeeklyMeetings: weeklyMeetingsChartData.length > 0
      }
    });

  } catch (error) {
    console.error("Error fetching analytics data:", error);
    res.status(500).json({
      error: "Failed to fetch analytics data",
      details: error.message
    });
  }
};

export const scheduleNewMeeting = async (req, res) => {
  try {
    const userId = req.user._id;
    const {
      title,
      emailRecipients,
      scheduledDateTime,
      discussionTopics,
      scheduledDuration = 60,
      meetingLink,
      location
    } = req.body;

    // Validation
    if (!title || !scheduledDateTime) {
      return res.status(400).json({
        error: "Meeting title and scheduled date/time are required"
      });
    }

    // Check if the scheduled time is in the future
    const scheduledDate = new Date(scheduledDateTime);
    if (scheduledDate <= new Date()) {
      return res.status(400).json({
        error: "Scheduled time must be in the future"
      });
    }

    // Create new scheduled meeting
    const newMeeting = new meetingSchema({
      user: userId,
      title,
      emailRecipients: emailRecipients || [],
      scheduledDateTime: scheduledDate,
      discussionTopics: discussionTopics || [],
      scheduledDuration,
      meetingLink,
      location,
      type: 'scheduled',
      meetingStatus: 'scheduled',
      participants: [],
      agenda: []
    });

    await newMeeting.save();

    res.status(201).json({
      message: "Meeting scheduled successfully",
      meeting: newMeeting
    });

  } catch (error) {
    console.error("Error scheduling meeting:", error);
    res.status(500).json({
      error: "Failed to schedule meeting",
      details: error.message
    });
  }
};

// Get all scheduled meetings for a user
export const getScheduledMeetings = async (req, res) => {
  try {
    const userId = req.user._id;
    const { status, upcoming } = req.query;

    let query = {
      user: userId,
      type: 'scheduled'
    };

    // Filter by status if provided
    if (status) {
      query.meetingStatus = status;
    }

    // Filter for upcoming meetings only
    if (upcoming === 'true') {
      query.scheduledDateTime = { $gte: new Date() };
      query.meetingStatus = { $in: ['scheduled', 'in-progress'] };
    }

    const scheduledMeetings = await meetingSchema
      .find(query)
      .sort({ scheduledDateTime: 1 })
      .lean();

    res.status(200).json({
      meetings: scheduledMeetings,
      count: scheduledMeetings.length
    });

  } catch (error) {
    console.error("Error fetching scheduled meetings:", error);
    res.status(500).json({
      error: "Failed to fetch scheduled meetings",
      details: error.message
    });
  }
};

// Get today's meeting reminders
export const getTodaysMeetingReminders = async (req, res) => {
  try {
    const userId = req.user._id;
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);

    // Find meetings scheduled for today that haven't been attended or missed
    const todaysMeetings = await meetingSchema
      .find({
        user: userId,
        type: 'scheduled',
        scheduledDateTime: {
          $gte: startOfDay,
          $lt: endOfDay
        },
        meetingStatus: { $in: ['scheduled', 'in-progress'] },
        isAttended: false
      })
      .sort({ scheduledDateTime: 1 })
      .lean();

    // Filter out meetings that have passed their time + 5 minutes buffer
    const validReminders = todaysMeetings.filter(meeting => {
      const meetingTime = new Date(meeting.scheduledDateTime);
      const bufferTime = new Date(meetingTime.getTime() + 5 * 60 * 1000); // 5 minutes buffer
      return now <= bufferTime;
    });

    // Mark meetings as missed if they're past their time + buffer
    const missedMeetings = todaysMeetings.filter(meeting => {
      const meetingTime = new Date(meeting.scheduledDateTime);
      const bufferTime = new Date(meetingTime.getTime() + 5 * 60 * 1000);
      return now > bufferTime;
    });

    // Update missed meetings status
    if (missedMeetings.length > 0) {
      const missedIds = missedMeetings.map(m => m._id);
      await meetingSchema.updateMany(
        { _id: { $in: missedIds } },
        { meetingStatus: 'missed' }
      );
    }

    res.status(200).json({
      reminders: validReminders,
      count: validReminders.length
    });

  } catch (error) {
    console.error("Error fetching today's reminders:", error);
    res.status(500).json({
      error: "Failed to fetch today's reminders",
      details: error.message
    });
  }
};

// Update meeting status
export const updateMeetingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userId = req.user._id;

    const validStatuses = ['scheduled', 'in-progress', 'completed', 'cancelled', 'missed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        error: "Invalid meeting status"
      });
    }

    const meeting = await meetingSchema.findOneAndUpdate(
      { _id: id, user: userId, type: 'scheduled' },
      {
        meetingStatus: status,
        ...(status === 'completed' && { isAttended: true })
      },
      { new: true }
    );

    if (!meeting) {
      return res.status(404).json({
        error: "Scheduled meeting not found"
      });
    }

    res.status(200).json({
      message: "Meeting status updated successfully",
      meeting
    });

  } catch (error) {
    console.error("Error updating meeting status:", error);
    res.status(500).json({
      error: "Failed to update meeting status",
      details: error.message
    });
  }
};

// Mark meeting as attended
export const markMeetingAsAttended = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const meeting = await meetingSchema.findOneAndUpdate(
      { _id: id, user: userId, type: 'scheduled' },
      {
        isAttended: true,
        meetingStatus: 'completed'
      },
      { new: true }
    );

    if (!meeting) {
      return res.status(404).json({
        error: "Scheduled meeting not found"
      });
    }

    res.status(200).json({
      message: "Meeting marked as attended",
      meeting
    });

  } catch (error) {
    console.error("Error marking meeting as attended:", error);
    res.status(500).json({
      error: "Failed to mark meeting as attended",
      details: error.message
    });
  }
};

// Cancel scheduled meeting
export const cancelScheduledMeeting = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const meeting = await meetingSchema.findOneAndUpdate(
      { _id: id, user: userId, type: 'scheduled' },
      { meetingStatus: 'cancelled' },
      { new: true }
    );

    if (!meeting) {
      return res.status(404).json({
        error: "Scheduled meeting not found"
      });
    }

    res.status(200).json({
      message: "Meeting cancelled successfully",
      meeting
    });

  } catch (error) {
    console.error("Error cancelling meeting:", error);
    res.status(500).json({
      error: "Failed to cancel meeting",
      details: error.message
    });
  }
};

// NEW: Add this function to handle scheduled meeting recording
const processScheduledMeetingRecording = async (req, user, durationInSeconds, userSession, emails, scheduledMeetingId) => {
  const { userId, sessionId, userTempDir } = userSession;

  if (!req.file) {
    throw new Error("No audio file provided");
  }

  const { videoUrl } = req.body;
  if (!videoUrl) {
    throw new Error("Missing video URL");
  }

  const audioFile = req.file;
  console.log(`🎬📅 [User ${userId}][Session ${sessionId}] Processing scheduled meeting recording - Duration: ${durationInSeconds}s (${Math.round(durationInSeconds / 60)} minutes)`);

  const processingErrors = [];

  // Parse email recipients (same as regular recording)
  let emailRecipients = [];
  if (emails) {
    try {
      emailRecipients = JSON.parse(emails);
      console.log(`📧 [User ${userId}][Session ${sessionId}] Email recipients: ${emailRecipients.length} addresses`);
    } catch (error) {
      console.warn(`⚠️ [User ${userId}][Session ${sessionId}] Failed to parse emails, proceeding without email recipients`);
      emailRecipients = [];
      processingErrors.push({
        type: 'email_parsing_error',
        message: 'Failed to parse email recipients',
        details: error.message
      });
    }
  }

  const wavPath = path.join(userTempDir, "converted_audio.wav");

  try {
    // Convert to WAV format (same process as regular recording)
    console.log(`🎵 [User ${userId}][Session ${sessionId}] Converting audio to WAV format...`);
    await new Promise((resolve, reject) => {
      ffmpeg(audioFile.path)
        .audioChannels(1)
        .audioFrequency(16000)
        .toFormat("wav")
        .on("end", resolve)
        .on("error", reject)
        .save(wavPath);
    });

    // Upload original file to S3
    const audioKey = `meetings/audio/${userId}/${Date.now()}-${path.basename(audioFile.originalname)}`;
    const uploadedAudioUrl = await uploadToS3(audioFile.path, audioKey, "audio/webm");

    // Check duration and split if necessary
    console.log(`⏱️ [User ${userId}][Session ${sessionId}] Checking audio duration...`);
    const audioDurationSeconds = await getAudioDuration(wavPath);
    const CHUNK_DURATION = 180;
    let chunkPaths;

    if (audioDurationSeconds > CHUNK_DURATION) {
      chunkPaths = await splitAudioIntoChunks(wavPath, CHUNK_DURATION, userTempDir, userId, sessionId);
    } else {
      console.log(`✅ [User ${userId}][Session ${sessionId}] Audio short enough, processing without chunking`);
      chunkPaths = [wavPath];
    }

    // Transcribe audio (same process as regular recording)
    console.log(`🎙️ [User ${userId}][Session ${sessionId}] Starting transcription...`);
    const transcriptionResult = await transcribeChunksEnhanced(chunkPaths, userId, sessionId, {
      maxRetries: 3,
      concurrency: 2,
      allowPartialFailure: true,
    });

    // Check if we got any transcription at all
    if (!transcriptionResult.success || !transcriptionResult.transcript) {
      throw new Error("Complete transcription failure - no audio could be processed");
    }

    // Add transcription warnings if partial failure
    if (transcriptionResult.partialResult) {
      processingErrors.push({
        type: 'transcription_partial_failure',
        message: `${transcriptionResult.failedChunks} out of ${transcriptionResult.totalChunks} chunks failed to transcribe`,
        details: transcriptionResult.errors
      });
    }

    // Get the existing scheduled meeting to access discussionTopics
    const existingMeeting = await meetingSchema.findOne({
      _id: scheduledMeetingId,
      user: userId,
      type: 'scheduled'
    });

    if (!existingMeeting) {
      throw new Error('Scheduled meeting not found');
    }

    // NEW: Analyze discussion topics if they exist
    let discussionAnalysis = null;
    if (existingMeeting.discussionTopics && existingMeeting.discussionTopics.length > 0) {
      console.log(`📋 [User ${userId}][Session ${sessionId}] Analyzing ${existingMeeting.discussionTopics.length} scheduled discussion topics`);

      try {
        discussionAnalysis = await analyzeDiscussionTopics(
          transcriptionResult.transcript,
          existingMeeting.discussionTopics,
          userId,
          sessionId
        );

        console.log(`✅ [User ${userId}][Session ${sessionId}] Discussion analysis completed - Match score: ${discussionAnalysis?.discussionMatchScore || 0}%`);
      } catch (discussionError) {
        console.error(`⚠️ [User ${userId}][Session ${sessionId}] Discussion analysis failed:`, discussionError);
        processingErrors.push({
          type: 'discussion_analysis_error',
          message: 'Failed to analyze discussion topics',
          details: discussionError.message
        });
      }
    } else {
      console.log(`📋 [User ${userId}][Session ${sessionId}] No discussion topics scheduled - skipping analysis`);
    }

    // Process with AI (same as regular recording)
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
    const aiResults = await processTranscriptWithAI(transcriptionResult.transcript, userId, sessionId);

    // Add AI processing errors to our error list
    if (aiResults.errors.length > 0) {
      processingErrors.push({
        type: 'ai_processing_errors',
        message: 'Some AI processing steps failed',
        details: aiResults.errors
      });
    }

    // Create meeting data using comprehensive extraction
    const meetingData = createMeetingDataFromComprehensive(
      aiResults.comprehensiveData,
      aiResults.formattedTranscription,
      "Scheduled Meeting Recording" // Default title will be overridden by existing scheduled meeting title
    );

    // NEW: Add discussion analysis to meeting data if available
    if (discussionAnalysis) {
      meetingData.discussionTopicsAnalysis = discussionAnalysis.discussionTopicsAnalysis;
      meetingData.hasDiscussionAnalysis = discussionAnalysis.hasDiscussionAnalysis;
      meetingData.discussionMatchScore = discussionAnalysis.discussionMatchScore;
      meetingData.discussionSummary = discussionAnalysis.discussionSummary;
      meetingData.additionalTopicsDiscussed = discussionAnalysis.additionalTopicsDiscussed;
    }

    // NEW: Update the scheduled meeting instead of creating new one
    const updatedMeeting = await updateScheduledMeetingWithRecording(
      scheduledMeetingId,
      meetingData,
      userId,
      durationInSeconds,
      uploadedAudioUrl,
      videoUrl
    );

    // Update user usage (same as regular recording)
    await updateUserUsage(userId, durationInSeconds, 'recording');

    console.log(`✅ [User ${userId}][Session ${sessionId}] Scheduled meeting recording processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

    return {
      success: true,
      meeting: updatedMeeting,
      warnings: processingErrors.length > 0 ? processingErrors : undefined,
      partialResult: transcriptionResult.partialResult || aiResults.errors.length > 0,
      discussionAnalysis: discussionAnalysis
    };

  } finally {
    // Clean up uploaded file
    try {
      if (fs.existsSync(audioFile.path)) {
        fs.unlinkSync(audioFile.path);
        console.log(`🗑️ [User ${userId}][Session ${sessionId}] Cleaned up uploaded file`);
      }
    } catch (error) {
      console.error(`❌ [User ${userId}][Session ${sessionId}] Failed to cleanup uploaded file:`, error);
    }
  }
};

// Add this new function to handle scheduled meeting recording updates:
const updateScheduledMeetingWithRecording = async (scheduledMeetingId, meetingData, userId, durationInSeconds, uploadedAudioUrl, videoUrl) => {
  try {
    // Find the existing scheduled meeting
    const existingMeeting = await meetingSchema.findOne({
      _id: scheduledMeetingId,
      user: userId,
      type: 'scheduled'
    });

    if (!existingMeeting) {
      throw new Error('Scheduled meeting not found');
    }

    console.log(`📅 [User ${userId}] Updating scheduled meeting: ${existingMeeting.title}`);

    // Parse due dates for next steps
    const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
      ...step,
      parsedDueDate: parseDueDate(step.due, new Date()),
      reminderSent: false,
      reminderSentAt: null
    }));

    // Prepare update object
    const updateData = {
      // Keep original scheduled meeting data
      // Add recording data
      transcript: meetingData.transcript,
      summary: meetingData.summary,
      minutes: meetingData.minutes,
      nextSteps: nextStepsWithParsedDates,

      // Enhanced content from comprehensive extraction
      projects: meetingData.projects || [],
      keyInitiatives: meetingData.keyInitiatives || [],
      implementationPlan: meetingData.implementationPlan,
      challengesAndRisks: meetingData.challengesAndRisks || [],
      decisionsMade: meetingData.decisionsMade || [],

      // Boolean flags
      hasActionItems: meetingData.hasActionItems || false,
      hasProjects: meetingData.hasProjects || false,
      hasDecisions: meetingData.hasDecisions || false,
      hasImplementationPlan: meetingData.hasImplementationPlan || false,
      hasChallengesRisks: meetingData.hasChallengesRisks || false,
      hasKeyInitiatives: meetingData.hasKeyInitiatives || false,

      // Update meeting type and status
      meetingType: meetingData.meetingType || existingMeeting.meetingType || 'general',
      meetingStatus: 'completed',
      isAttended: true,

      // Add recording metadata
      recordingLength: durationInSeconds,
      recordingAudioUrl: uploadedAudioUrl,
      recordingVideoUrl: videoUrl,

      // Merge participants (keep scheduled + add detected)
      participants: [
        ...new Set([
          ...(existingMeeting.participants || []),
          ...(meetingData.participants || [])
        ])
      ],

      // Update agenda if AI detected better agenda items
      agenda: meetingData.agenda || [],

      // Processing metadata
      processingMethod: "whisper-chunks",
      processingErrors: undefined // Will be set if there are errors
    };

    // NEW: Add discussion analysis fields if available
    if (meetingData.discussionTopicsAnalysis) {
      updateData.discussionTopicsAnalysis = meetingData.discussionTopicsAnalysis;
      updateData.hasDiscussionAnalysis = meetingData.hasDiscussionAnalysis;
      updateData.discussionMatchScore = meetingData.discussionMatchScore;
      updateData.discussionSummary = meetingData.discussionSummary;

      console.log(`📊 [User ${userId}] Discussion analysis added - Match score: ${meetingData.discussionMatchScore}%`);
    }

    // Update the existing meeting with recording data
    const updatedMeeting = await meetingSchema.findByIdAndUpdate(
      scheduledMeetingId,
      updateData,
      { new: true }
    );

    console.log(`✅ [User ${userId}] Successfully updated scheduled meeting to completed`);
    return updatedMeeting;

  } catch (error) {
    console.error(`❌ [User ${userId}] Failed to update scheduled meeting:`, error);
    throw error;
  }
};


/**
 * Process extension recording with pre-transcribed captions
 */
const processExtensionRecording = async (req, userId) => {
  const sessionId = `ext-${Date.now()}`;
  
  try {
    const {
      duration,
      audioUrl,
      audioKey,
      participants: participantsString,
      captions: captionsString,
    } = req.body;

    console.log(`🎬 [User ${userId}][Session ${sessionId}] Processing extension recording`);

    // Parse data from extension
    const durationInSeconds = parseInt(duration) || 0;
    const participants = participantsString ? JSON.parse(participantsString) : [];
    const captions = captionsString ? JSON.parse(captionsString) : [];

    console.log(`📊 [User ${userId}][Session ${sessionId}] Extension data - Duration: ${durationInSeconds}s, Participants: ${participants.length}, Captions: ${captions.length}`);

    if (durationInSeconds <= 0) {
      throw new Error("Invalid duration provided");
    }

    if (!audioUrl) {
      throw new Error("Audio URL is required");
    }

    if (captions.length === 0) {
      throw new Error("No captions provided");
    }

    const processingErrors = [];

    // Step 1: Format captions into transcript format
    console.log(`📝 [User ${userId}][Session ${sessionId}] Formatting ${captions.length} captions into transcript`);
    
    const formattedTranscription = captions.map(caption => ({
      speaker: caption.speaker || "Unknown",
      text: caption.text || ""
    }));

    // Combine all text for AI processing
    const fullTranscriptText = captions.map(c => c.text).join(" ");

    // Step 2: Process with AI for summary, minutes, next steps, etc.
    console.log(`🧠 [User ${userId}][Session ${sessionId}] Processing transcript with AI...`);
    const aiResults = await processTranscriptWithAI(fullTranscriptText, userId, sessionId);

    // Add AI processing errors to our error list
    if (aiResults.errors.length > 0) {
      processingErrors.push({
        type: 'ai_processing_errors',
        message: 'Some AI processing steps failed',
        details: aiResults.errors
      });
    }

    // Step 3: Create meeting data using comprehensive extraction
    const meetingData = createMeetingDataFromComprehensive(
      aiResults.comprehensiveData,
      formattedTranscription,
      "Google Meet Recording"
    );

    // Merge participants from extension with AI-detected ones
    const allParticipants = [...new Set([...participants])];
    meetingData.participants = allParticipants;

    // Parse due dates for next steps
    const nextStepsWithParsedDates = meetingData.nextSteps.map(step => ({
      ...step,
      parsedDueDate: parseDueDate(step.due, new Date()),
      reminderSent: false,
      reminderSentAt: null
    }));

    // Step 4: Save to database
    console.log(`💾 [User ${userId}][Session ${sessionId}] Saving meeting to database`);
    
    const savedMeeting = await meetingSchema.create({
      user: userId,

      // Basic info
      title: meetingData.title,
      participants: allParticipants,
      agenda: meetingData.agenda,
      summary: meetingData.summary,
      meetingType: meetingData.meetingType,

      // Core content
      transcript: formattedTranscription,
      minutes: meetingData.minutes,
      nextSteps: nextStepsWithParsedDates,

      // Enhanced content
      projects: meetingData.projects || [],
      keyInitiatives: meetingData.keyInitiatives || [],
      implementationPlan: meetingData.implementationPlan,
      challengesAndRisks: meetingData.challengesAndRisks || [],
      decisionsMade: meetingData.decisionsMade || [],

      // Boolean flags
      hasActionItems: meetingData.hasActionItems || false,
      hasProjects: meetingData.hasProjects || false,
      hasDecisions: meetingData.hasDecisions || false,
      hasImplementationPlan: meetingData.hasImplementationPlan || false,
      hasChallengesRisks: meetingData.hasChallengesRisks || false,
      hasKeyInitiatives: meetingData.hasKeyInitiatives || false,

      // Technical fields
      recordingLength: durationInSeconds,
      recordingAudioUrl: audioUrl,
      type: "recording",
      processingMethod: "extension-captions",
      processingErrors: processingErrors.length > 0 ? processingErrors : undefined
    });

    // Step 5: Update user usage
    await updateUserUsage(userId, durationInSeconds, 'recording');

    // Step 6: Create history record
    const user = await User.findById(userId).populate('plan');
    const planMinutesLimit = user.plan?.minutes || 100;
    const MAX_SECONDS_ALLOWED = planMinutesLimit * 60;
    const currentTotalUsage = user.totalSecondsUsed || 0;

    await historyModel.create({
      user: userId,
      action: 'created',
      targetType: 'Meeting',
      targetId: savedMeeting._id,
      details: {
        meeting: {
          title: savedMeeting.title,
          type: savedMeeting.type,
          participants: savedMeeting.participants,
          recordingLength: durationInSeconds,
          recordingLengthMinutes: Math.round(durationInSeconds / 60),
          transcriptItems: savedMeeting.transcript.length,
          minutesItems: savedMeeting.minutes.length,
          nextStepsItems: savedMeeting.nextSteps.length,
          nextStepsWithDates: nextStepsWithParsedDates.filter(s => s.parsedDueDate).length,
          hasProcessingErrors: processingErrors.length > 0,
          processingErrorCount: processingErrors.length
        },
        creator: {
          userId: user._id,
          userName: user.name || user.username,
          userEmail: user.email
        },
        processing: {
          method: 'extension-captions',
          source: 'chrome-extension',
          originalCaptionItems: captions.length,
          aiProcessingErrors: aiResults.errors.length,
          partialResult: aiResults.errors.length > 0
        },
        usage: {
          usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
          remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60)
        }
      }
    });

    console.log(`✅ [User ${userId}][Session ${sessionId}] Extension recording processing completed ${processingErrors.length > 0 ? 'with warnings' : 'successfully'}`);

    return {
      success: true,
      meeting: savedMeeting,
      meetingId: savedMeeting._id,
      warnings: processingErrors.length > 0 ? processingErrors : undefined,
      partialResult: aiResults.errors.length > 0,
      usage: {
        usedMinutes: Math.round((currentTotalUsage + durationInSeconds) / 60),
        remainingMinutes: Math.round((MAX_SECONDS_ALLOWED - currentTotalUsage - durationInSeconds) / 60),
        maxMinutes: planMinutesLimit
      }
    };

  } catch (error) {
    console.error(`❌ [User ${userId}][Session ${sessionId}] Extension recording processing failed:`, error);
    throw error;
  }
};
export {
  generateMeetingData,
  getMeetingData,
  getMeetingDetails,
  generatePresignedUrl,
  getSingleMeetingData,
  deleteMeetingData,
  getAnalyticsData
};
