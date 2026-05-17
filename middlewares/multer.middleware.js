// middlewares/upload.middleware.js

import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000 * 1024 * 1024 }, // 2GB max file size
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("audio/") || file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only audio and video files are allowed"));
    }
  },
});

export default upload;
