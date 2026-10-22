import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { deleteUserAccount, getUserProfile, updateUserProfile } from "../controllers/profile.controllers.js";

const profileRouter = express.Router();
profileRouter.use(verifyToken);
profileRouter.get('/profile', getUserProfile);
profileRouter.put('/profile', updateUserProfile);
profileRouter.delete('/profile', deleteUserAccount);

export { profileRouter };