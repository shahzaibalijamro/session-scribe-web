import livetranscriptionModel from "../models/livetranscription.model.js";

const processLiveTranscriptionSummary = async (req, res) => {
  try {
    const { liveTranscripts } = req.body;
    if (!liveTranscripts || !Array.isArray(liveTranscripts) || liveTranscripts.length === 0) {
      return res.status(400).json({ 
        error: "Live transcripts are required and must be a non-empty array" 
      });
    }

    console.log(`📝 Processing live transcription summary for ${liveTranscripts.length} transcript items`);

    // Generate summary using the new function
    const summaryData = await generateLiveTranscriptionSummary(liveTranscripts);


    const newLiveTranscriptionData = await livetranscriptionModel.create({
        userId: req.user._id,
        summary: summaryData.summary,
        keyPoints: summaryData.keyPoints,
        participants: summaryData.participants,
    })

    console.log(`✨ Live transcription summary generated and saved successfully`);

    res.json({
      success: true,
      summary: summaryData
    });

  } catch (error) {
    console.error("❌ Error processing live transcription summary:", error);
    res.status(500).json({
      error: "Failed to process live transcription summary",
      details: error.message,
    });
  }
};

const getLiveTranscriptions = async (req, res) => {
  try {
    const userId = req.user._id;
    
    console.log(`📋 Fetching live transcriptions for user: ${userId}`);

    // Fetch all live transcriptions for the user, sorted by most recent first
    const liveTranscriptions = await livetranscriptionModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .lean(); // Use lean() for better performance since we're just reading data

    console.log(`✅ Found ${liveTranscriptions.length} live transcriptions for user`);

    res.json({
      success: true,
      count: liveTranscriptions.length,
      data: liveTranscriptions
    });

  } catch (error) {
    console.error("❌ Error fetching live transcriptions:", error);
    res.status(500).json({
      error: "Failed to fetch live transcriptions",
      details: error.message,
    });
  }
};

export { processLiveTranscriptionSummary,getLiveTranscriptions };