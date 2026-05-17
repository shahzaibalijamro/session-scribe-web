// import {
//   generateMeetingData,
//   generatePresignedUrl,
//   getMeetingData,
//   getSingleMeetingData,
//   deleteMeetingData,
//   getAnalyticsData,
// } from "../controllers/meeting.controllers.js";
// import express from "express";
// import multer from "multer";
// import { verifyToken } from "../middlewares/auth.middleware.js";
// import {
//   getLiveTranscriptions,
//   processLiveTranscriptionSummary,
// } from "../controllers/livetranscription.controllers.js";
// import meetingSchema from "../models/meeting.model.js";
// import { getContextualSuggestions, getSuggestions } from "../controllers/suggestion.controllers.js";

// const upload = multer({ dest: "uploads/" });
// const router = express.Router();

// router.use(verifyToken); // Apply auth middleware to all routes

// // Existing routes
// router.post("/", upload.single("audioFile"), generateMeetingData);
// router.get("/meeting-data", getMeetingData);
// router.post("/generate-upload-url", generatePresignedUrl);

// // NEW: Route for processing live transcription summary
// router.post("/live-summary", processLiveTranscriptionSummary);

// router.post('/get-suggestions', getSuggestions);
// router.post('/get-contextual-suggestions', getContextualSuggestions);

// router.get("/live-transcriptions", getLiveTranscriptions);
// router.get("/meetingCount", async (req, res) => {
//   const userId = req.user._id;
//   try {
//     const meetingCount = await meetingSchema
//       .find({ user: userId })
//       .countDocuments();
//     res.status(200).json({ meetingCount });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: error.message || error,
//     });
//   }
// });

// // Add this route to your meeting routes file
// router.get("/analytics", getAnalyticsData);

// router.get("/:id", getSingleMeetingData);

// router.delete("/:id",deleteMeetingData);
// export default router;



import {
  generateMeetingData,
  generatePresignedUrl,
  getMeetingData,
  getSingleMeetingData,
  deleteMeetingData,
  getAnalyticsData,
  // NEW: Scheduled meeting controllers
  scheduleNewMeeting,
  getScheduledMeetings,
  updateMeetingStatus,
  getTodaysMeetingReminders,
  cancelScheduledMeeting,
  markMeetingAsAttended
} from "../controllers/meeting.controllers.js";
import express from "express";
import multer from "multer";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  getLiveTranscriptions,
  processLiveTranscriptionSummary,
} from "../controllers/livetranscription.controllers.js";
import meetingSchema from "../models/meeting.model.js";
import { getContextualSuggestions, getSuggestions } from "../controllers/suggestion.controllers.js";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.use(verifyToken); // Apply auth middleware to all routes

// Existing routes
router.post("/", upload.single("audioFile"), generateMeetingData);
router.get("/meeting-data", getMeetingData);
router.post("/generate-upload-url", generatePresignedUrl);

// Live transcription routes
router.post("/live-summary", processLiveTranscriptionSummary);
router.get("/live-transcriptions", getLiveTranscriptions);

// Suggestion routes
router.post('/get-suggestions', getSuggestions);
router.post('/get-contextual-suggestions', getContextualSuggestions);

// Analytics and counts
router.get("/meetingCount", async (req, res) => {
  const userId = req.user._id;
  try {
    const meetingCount = await meetingSchema
      .find({ user: userId, type: { $ne: 'scheduled' } })
      .countDocuments();
    res.status(200).json({ meetingCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message || error,
    });
  }
});

router.get("/analytics", getAnalyticsData);

// NEW: Scheduled meeting routes
router.post("/schedule", scheduleNewMeeting);
router.get("/scheduled", getScheduledMeetings);
router.get("/today-reminders", getTodaysMeetingReminders);
router.patch("/:id/status", updateMeetingStatus);
router.patch("/:id/attend", markMeetingAsAttended);
router.delete("/:id/cancel", cancelScheduledMeeting);

// Single meeting routes (keep at end to avoid conflicts)
router.get("/:id", getSingleMeetingData);
router.delete("/:id", deleteMeetingData);

export default router;
