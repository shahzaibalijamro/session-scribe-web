import express from "express"; // Your auth middleware
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getSupportRequest, getUserSupportRequests, submitSupportRequest, updateSupportRequest } from "../controllers/support.controllers.js";

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// POST /api/support/submit - Submit a new support request
router.post("/submit", submitSupportRequest);

// GET /api/support - Get user's support requests with pagination
router.get("/", getUserSupportRequests);

// GET /api/support/:id - Get a specific support request
router.get("/:id", getSupportRequest);

// PUT /api/support/:id - Update a support request (add additional information)
router.put("/:id", updateSupportRequest);

export default router;

// Usage in your main app.js or server.js:
/*
import supportRoutes from "./routes/supportRequest.routes.js";

app.use("/api/support", supportRoutes);
*/