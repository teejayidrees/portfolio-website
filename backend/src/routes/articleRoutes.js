import express from "express";
import multer from "multer";
import path from "path";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
} from "../Controllers/articleController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

// Create the router
const router = express.Router();

// Use temporary local disk storage for both audio and image
// This is needed because we will upload files to Cloudinary manually in the controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "temp/"); // All files saved temporarily here
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp and original extension
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

// Initialize multer with the disk storage
const upload = multer({ storage });
router.get("/", getAllArticle);
router.post(
  "/uploads",
  upload.fields([{ name: "image", maxCount: 1 }]),
  verifyAdmin,
  createArticle
);
router.delete("/:id", verifyAdmin, deleteArticle);
export default router;
