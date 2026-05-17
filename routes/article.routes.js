import express from "express";
import multer from "multer";
import {
  getPublishedArticles,
  getArticleBySlug,
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleStats,
  incrementArticleLike
} from "../controllers/article.controllers.js";
import { verifyToken, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

// Public routes
router.get("/", getPublishedArticles);
router.get("/slug/:slug", getArticleBySlug);

// Protected routes (authenticated users)
router.post("/:id/like", incrementArticleLike);
router.use(verifyToken);

// Admin only routes
router.use(adminOnly);
router.get("/admin/all", getAllArticles);
router.get("/admin/stats", getArticleStats);
router.get("/admin/:id", getArticleById);
router.post("/admin", upload.single("featuredImage"), createArticle);
router.put("/admin/:id", upload.single("featuredImage"), updateArticle);
router.delete("/admin/:id", deleteArticle);

export default router;
