import express from "express";
import { body } from "express-validator";
import { forgotPassword, getMe, googleSignIn, login, protect, resetPassword, signup, updatePassword } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkUsageStatus } from "../utils.js";
const router = express.Router();

const validateSignup = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

router.post("/signup", validateSignup, signup);
router.post("/signin", login);
router.post("/google-signin", googleSignIn);

router.post("/forgot-Password", forgotPassword);
router.patch("/reset-Password/:token", resetPassword);
router.patch(
  "/updateMyPassword",
  protect,
  updatePassword
);
router.get("/me", getMe);
// Add this route to your meeting routes file
router.get('/usage-status', verifyToken, checkUsageStatus);

export default router;