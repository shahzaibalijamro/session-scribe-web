import express from "express";
import path from "path";
import fs from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { ObjectId } from "mongodb";
import verifyToken from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js"
import Recording from "../models/recording.model.js";

const router = express.Router();

// Configure S3 client


// Helper function to upload to S3
async function uploadToS3(filePath, key) {

    const s3Client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });

    try {
        const fileContent = fs.readFileSync(filePath);

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
            Body: fileContent,
            ContentType: "video/webm",
        });

        await s3Client.send(command);

        // Return the URL to the uploaded file
        return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    } catch (error) {
        console.error("S3 upload error:", error);
        throw error;
    }
}

// Helper function to upload audio file to S3
async function uploadAudioToS3(filePath, key) {

    const s3Client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });

    try {
        const fileContent = fs.readFileSync(filePath);

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
            Body: fileContent,
            ContentType: 'audio/mpeg', // Assuming audio is mp3, can be adjusted based on the format
        });

        await s3Client.send(command);

        // Return the URL to the uploaded file
        return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    } catch (error) {
        console.error("Audio S3 upload error:", error);
        throw error;
    }
}


// POST /api/recordings - Create a new recording
router.post("/", verifyToken, upload.fields([
    { name: "audioFile", maxCount: 1 },
    { name: "videoFile", maxCount: 1 }
]), async (req, res) => {
    try {
        // Extract recording metadata
        const { title, duration, recordedAt } = req.body;

        if (!title || !duration || !recordedAt) {
            return res.status(400).json({
                success: false,
                message: "Title, duration and recordedAt are required"
            });
        }

        // Get file paths
        const audioFile = req.files.audioFile ? req.files.audioFile[0] : null;
        const videoFile = req.files.videoFile ? req.files.videoFile[0] : null;

console.log(audioFile, videoFile);
console.log(title, duration, recordedAt);



        // Upload audio to Cloudinary
        let audioUrl = null;
        if (audioFile) {
            audioUrl = await uploadAudioToS3(
                audioFile.path,
                `recordings/audio/${Date.now()}-${path.basename(audioFile.originalname)}`
            );
        }

        // Upload video to S3
        let videoUrl = null;
        if (videoFile) {
            videoUrl = await uploadToS3(
                videoFile.path,
                `recordings/${Date.now()}-${path.basename(videoFile.originalname)}`
            );
        }

        // Save metadata to MongoDB
        const result = await Recording.create({
            title,
            duration: parseInt(duration),
            recordedAt: new Date(recordedAt),
            audioUrl,
            videoUrl,
            userId: req.user.id, // Get user ID from the auth middleware
        });

        // Clean up temp files asynchronously

        try {

            if (audioFile) await fs.promises.unlink(audioFile.path);

            if (videoFile) await fs.promises.unlink(videoFile.path);

        } catch (err) {

            console.error("Error deleting temporary files", err);

        }

        res.status(201).json({
            success: true,
            recordingId: result._id,
            message: "Recording saved successfully"
        });

    } catch (error) {
        console.error("Error saving recording:", error);
        res.status(500).json({ success: false, message: "Error saving recording" });
    }
});

// GET /api/recordings - Get all recordings for current user
router.get("/", verifyToken, async (req, res) => {
    try {
        // Get recordings for the current user
        const recordings = await Recording
            .find({ userId: req.user.id })
            .sort({ recordedAt: -1 })
            .toArray();

        res.status(200).json({ success: true, recordings });
    } catch (error) {
        console.error("Error fetching recordings:", error);
        res.status(500).json({ success: false, message: "Error fetching recordings" });
    }
});

// GET /api/recordings/:id - Get a specific recording
router.get("/:id", verifyToken, async (req, res) => {
    try {

        const recording = await Recording.findOne({
            _id: new ObjectId(req.params.id),
            userId: req.user.id
        });

        if (!recording) {
            return res.status(404).json({ success: false, message: "Recording not found" });
        }

        res.status(200).json({ success: true, recording });
    } catch (error) {
        console.error("Error fetching recording:", error);
        res.status(500).json({ success: false, message: "Error fetching recording" });
    }
});

// DELETE /api/recordings/:id - Delete a recording
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        // Find the recording first to get URLs
        const recording = await Recording.findOne({
            _id: new ObjectId(req.params.id),
            userId: req.user.id
        });

        if (!recording) {
            return res.status(404).json({ success: false, message: "Recording not found" });
        }

        // Delete from database
        await Recording.deleteOne({
            _id: new ObjectId(req.params.id),
            userId: req.user.id
        });

        // Note: We could also delete from Cloudinary and S3 here,
        // but that would require additional logic not shown in this example

        res.status(200).json({ success: true, message: "Recording deleted successfully" });
    } catch (error) {
        console.error("Error deleting recording:", error);
        res.status(500).json({ success: false, message: "Error deleting recording" });
    }
});

export default router;