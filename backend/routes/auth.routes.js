import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  loginUser,
  signupUser,
  verifyUser,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/protected", verifyToken, verifyUser);

// POST /api/auth/signin
router.post("/signin", loginUser);

// POST /api/auth/signup
router.post("/signup", signupUser);

export default router;
