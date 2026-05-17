import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Optional: reference the user who did the action
      required: true,
    },
    action: {
      type: String, // e.g., 'created', 'updated', 'deleted'
      required: true,
    },
    targetType: {
      type: String, // e.g., 'Property', 'CallLog', etc.
      required: true,
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId, // ID of the affected document
      required: true,
    },
    details: {
      type: Object, // Store specific changes, like before/after values
      default: {},
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

export default mongoose.model("History", historySchema);
