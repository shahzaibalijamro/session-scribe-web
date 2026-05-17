import mongoose from "mongoose";

const liveTranscription = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    keyPoints: {
      type: [String],
      required: true, // Array of key points from the liveTranscription
    },
    participants: {
      type: [String],
      required: true, // Array of participant names or IDs
    },
  },
  { timestamps: true }
);

export default mongoose.model("LiveTranscription", liveTranscription);