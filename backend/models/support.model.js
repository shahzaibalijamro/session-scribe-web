import mongoose from "mongoose";

const SupportRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Technical Issue", "Billing", "Account", "Feature Request", "Other"],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    includeActivity: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    resolvedAt: {
      type: Date,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Add indexes for better performance
SupportRequestSchema.index({ email: 1 });
SupportRequestSchema.index({ status: 1 });
SupportRequestSchema.index({ category: 1 });
SupportRequestSchema.index({ createdAt: -1 });
SupportRequestSchema.index({ userId: 1 });

const SupportRequest = mongoose.model("SupportRequest", SupportRequestSchema);
export default SupportRequest;