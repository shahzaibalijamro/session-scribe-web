import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import User from "./models/user.model.js";// Configure Cloudinary with environment variables


const uploadToCloudinary = async (filePath, resourceType = "auto") => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: resourceType,
      folder: "session-scribe/meetings/audio",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};


const checkUsageStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('plan');

    const planMinutes = user?.plan?.minutes || 100;
    const MAX_SECONDS_ALLOWED = planMinutes * 60 || 6000; // 100 minutes

    const currentTotalUsage = user.totalSecondsUsed || 0;
    const remainingSeconds = Math.max(0, MAX_SECONDS_ALLOWED - currentTotalUsage);

    const usageData = {
      totalUsed: {
        seconds: currentTotalUsage,
        minutes: Math.round(currentTotalUsage / 60)
      },
      remaining: {
        seconds: remainingSeconds,
        minutes: Math.round(remainingSeconds / 60)
      },
      breakdown: {
        recording: {
          seconds: user.recordingSecondsUsed || 0,
          minutes: Math.round((user.recordingSecondsUsed || 0) / 60)
        },
        liveTranscription: {
          seconds: user.liveTranscriptionSecondsUsed || 0,
          minutes: Math.round((user.liveTranscriptionSecondsUsed || 0) / 60)
        },
        audioNotes: {
          seconds: user.audioNotesSecondsUsed || 0,
          minutes: Math.round((user.audioNotesSecondsUsed || 0) / 60)
        }
      },
      limits: {
        maxMinutes: 100,
        maxSeconds: MAX_SECONDS_ALLOWED
      },
      status: {
        canRecord: remainingSeconds > 0,
        isNearLimit: remainingSeconds < 600, // Less than 10 minutes remaining
        percentageUsed: Math.round((currentTotalUsage / MAX_SECONDS_ALLOWED) * 100)
      }
    };

    res.json({
      success: true,
      usage: usageData
    });
  } catch (error) {
    console.error("Error checking usage status:", error);
    res.status(500).json({
      error: "Failed to check usage status",
      details: error.message
    });
  }
};

export { uploadToCloudinary, checkUsageStatus };