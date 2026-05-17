// import express from "express";
// import {
//   submitFeedback,
//   getFeedbacks,
//   updateFeedbackStatus,
// } from "../controllers/feedback.controllers.js";
// import {  adminOnly } from "../middlewares/auth.middleware.js";

// const router = express.Router();

// // User routes
// router.post("/",  submitFeedback);

// // Admin routes
// router.get("/",  adminOnly, getFeedbacks);
// router.put("/:id/status",  adminOnly, updateFeedbackStatus);

// export default router;

import express from "express";
import { adminOnly,verifyToken } from "../middlewares/auth.middleware.js";
import { 
  submitFeedback,
  getUserFeedback,
  getAllFeedback,
  updateFeedbackStatus,
  getFeedbackById,
  deleteFeedback
} from "../controllers/feedback.controllers.js";

const feedbackRouter = express.Router();

feedbackRouter.use(verifyToken)

// User routes - require authentication
feedbackRouter.post('/', submitFeedback);
feedbackRouter.get('/my-feedback', getUserFeedback);

// Admin routes - require authentication and admin privileges  
feedbackRouter.get('/admin', adminOnly, getAllFeedback);
feedbackRouter.get('/admin/:id', adminOnly, getFeedbackById);
feedbackRouter.patch('/admin/:id/status', adminOnly, updateFeedbackStatus);
feedbackRouter.delete('/admin/:id', adminOnly, deleteFeedback);

export { feedbackRouter };