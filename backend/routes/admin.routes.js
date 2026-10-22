import express from "express";
import getAllRecordingUrls, {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllRecordings,
  getAllUsersAdmin,
  updateUserStatus,
  // getstats,
} from "../controllers/admin.controllers.js";
import { verifyToken, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Admin protected routes
router.use(verifyToken, adminOnly);

// User management routes
router.get("/users", getUsers);

router.get('/allusers',getAllUsersAdmin);
router.patch('/users/:userId/status', updateUserStatus);

router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
// router.get("/recordings", getAllRecordings);
router.get("/recordings", getAllRecordingUrls);
// router.get("/stats", getstats);

export default router;
