import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./index.js";
import fs from "fs";
import User from "./models/user.model.js";
const uploadToS3 = async (filePath, key, contentType) => {
  try {
    const fileContent = fs.readFileSync(filePath);
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    });
    await s3Client.send(command);
    return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  } catch (error) {
    console.error("S3 upload error:", error);
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

export { uploadToS3,checkUsageStatus };