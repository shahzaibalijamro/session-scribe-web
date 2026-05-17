import express from "express";
import getAllRecordingUrls from "../controllers/admin.controllers.js";
import { verifyToken, adminOnly } from "../middlewares/auth.middleware.js";
const router = express.Router();
// router.use();

router.get("/recordings", verifyToken, adminOnly, getAllRecordingUrls);

export default router;