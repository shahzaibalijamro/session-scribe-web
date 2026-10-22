// routes/emailRoutes.js - Email routes setup
import express from "express";
import multer from "multer";
import {
  getPreviousMeetingEmails,
  sendMeetingSummary,
  testEmailConfiguration,
} from "../controllers/email.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js"; // Your auth middleware

const router = express.Router();
// ✅ Apply auth middleware once
router.use(verifyToken);
// Configure multer for PDF file uploads (in-memory storage)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    fieldSize: 1024 * 1024, // 1MB for text fields
  },
  fileFilter: (req, file, cb) => {
    // Accept only PDF files
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

// Email routes
router.post("/send-meeting-summary", upload.single("pdf"), sendMeetingSummary);

router.get("/test-email", testEmailConfiguration);

router.get("/meeting/previous-emails", getPreviousMeetingEmails);

export default router;
