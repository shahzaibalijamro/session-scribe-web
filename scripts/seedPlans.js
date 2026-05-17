import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    planId: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    minutes: { type: Number, required: true },
    features: {
      transcription: { type: Boolean, default: true },
      summary: { type: Boolean, default: false },
      actionSuggestions: { type: Boolean, default: false },
      insights: { type: Boolean, default: false },
      toneAnalysis: { type: Boolean, default: false },
      multipleUsers: { type: Boolean, default: false },
      customAnalytics: { type: Boolean, default: false },
    },
    description: { type: String, trim: true },
    sortOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    billingCycle: { type: Number, default: 30, enum: [30, 365] },
    isPopular: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Plan = mongoose.model("plan", planSchema);

const PLANS = [
  {
    planId: "free",
    name: "Free",
    price: 0,
    minutes: 100,
    features: {
      transcription: true,
      summary: true,
      actionSuggestions: true,
      insights: true,
      toneAnalysis: true,
      multipleUsers: true,
      customAnalytics: true,
    },
    description: "100 minutes - all features included for free",
    sortOrder: 1,
    isActive: true,
    billingCycle: 30,
    isPopular: false,
  },
  {
    planId: "pro",
    name: "Pro",
    price: 14.99,
    minutes: 500,
    features: {
      transcription: true,
      summary: true,
      actionSuggestions: true,
      insights: true,
      toneAnalysis: true,
      multipleUsers: true,
      customAnalytics: true,
    },
    description: "500 minutes - all features included",
    sortOrder: 2,
    isActive: true,
    billingCycle: 30,
    isPopular: true,
  },
  {
    planId: "enterprise",
    name: "Enterprise",
    price: 49.99,
    minutes: 2000,
    features: {
      transcription: true,
      summary: true,
      actionSuggestions: true,
      insights: true,
      toneAnalysis: true,
      multipleUsers: true,
      customAnalytics: true,
    },
    description: "2000 minutes - all features included, unlimited users",
    sortOrder: 3,
    isActive: true,
    billingCycle: 30,
    isPopular: false,
  },
];

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, { dbName: "test" });
    console.log("Connected.");

    console.log("Removing existing plans...");
    await Plan.deleteMany({});

    console.log("Inserting 3 plans...");
    const inserted = await Plan.insertMany(PLANS);
    console.log(`Done. Inserted ${inserted.length} plans:`);
    inserted.forEach((p) =>
      console.log(`  [${p.planId}] ${p.name} — ${p.minutes} min — $${p.price}`)
    );

    await mongoose.disconnect();
    console.log("Disconnected. Exiting.");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seed();