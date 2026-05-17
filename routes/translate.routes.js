import express from "express"; // Your auth middleware
import { verifyToken } from "../middlewares/auth.middleware.js";
import { translateMeeting } from "../controllers/translate.controllers.js";

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// POST /api/support/submit - Submit a new support request
router.post('/:id/translate', translateMeeting);

export default router;