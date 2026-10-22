import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        planId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        minutes: {
            type: Number,
            required: true,
        },
        features: {
            transcription: {
                type: Boolean,
                default: true,
            },
            summary: {
                type: Boolean,
                default: false,
            },
            actionSuggestions: {
                type: Boolean,
                default: false,
            },
            insights: {
                type: Boolean,
                default: false,
            },
            toneAnalysis: {
                type: Boolean,
                default: false,
            },
            // For team plans
            multipleUsers: {
                type: Boolean,
                default: false,
            },
            customAnalytics: {
                type: Boolean,
                default: false,
            },
        },
        // Plan metadata
        description: {
            type: String,
            trim: true,
        },
        // For sorting plans in UI (Free Trial = 1, Starter = 2, etc.)
        sortOrder: {
            type: Number,
            default: 0,
        },
        // Allow disabling plans without deleting them
        isActive: {
            type: Boolean,
            default: true,
        },
        // Billing cycle in days (30 for monthly, 365 for yearly)
        billingCycle: {
            type: Number,
            default: 30,
            enum: [30, 365], // monthly or yearly
        },
        // Popular plan badge
        isPopular: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const planModel = mongoose.model("plan", planSchema);

export { planModel };
