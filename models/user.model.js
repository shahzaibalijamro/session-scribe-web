import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
      required: true
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "plan",
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === 'local';
      },
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleUid: {
      type: String,
      sparse: true,
    },
    avatar: {
      type: String,
    },
    hasExceededPlanLimit: {
      type: Boolean,
      default: false
    },
    // NEW FIELD: Track if user has installed the extension
    hasInstalledExtension: {
      type: Boolean,
      default: false
    },
    totalSecondsUsed: {
      type: Number,
      default: 0
    },
    recordingSecondsUsed: {
      type: Number,
      default: 0
    },
    liveTranscriptionSecondsUsed: {
      type: Number,
      default: 0
    },
    audioNotesSecondsUsed: {
      type: Number,
      default: 0
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    passwordChangedAt: Date,
    stripeCustomerId: { type: String },
    subscriptionId: { type: String },
    subscriptionStatus: { type: String, enum: ["active", "past_due", "canceled", "trialing", "incomplete"], default: null },
    subscriptionCurrentPeriodEnd: { type: Date },
    planPurchaseDate: { type: Date },
    planRenewalDate: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.authProvider === 'google') return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to create password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

  return resetToken;
};

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;

