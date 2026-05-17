import mongoose from "mongoose";

const recordingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    recordedAt: {
      type: Date,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming "User" is the model for your users collection
      required: true,
    },
  },
  { timestamps: true }
);

const Recording = mongoose.model("Recording", recordingSchema);
export default Recording;
