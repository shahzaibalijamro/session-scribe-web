import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createPaymentIntent, updateUserPlan, upgradeFreeUserPlan } from "../controllers/payment.controllers.js";

const router = express.Router();

router.use(verifyToken);

// POST /payment/create-payment-intent
router.post("/payment/create-payment-intent", createPaymentIntent);

// POST /payment/update-user-plan
router.post("/payment/update-user-plan", updateUserPlan);

// POST /user/upgrade-free-plan
router.post("/user/upgrade-free-plan", upgradeFreeUserPlan);

export default router;