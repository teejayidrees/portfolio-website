import express from "express";
import multer from "multer";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
} from "../Controllers/articleController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Use memory storage to avoid saving to disk
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getAllArticle);

router.post(
  "/uploads",
  upload.fields([{ name: "image", maxCount: 1 }]),
  
  createArticle
);

router.delete("/:id", verifyAdmin, deleteArticle);

export default router;
