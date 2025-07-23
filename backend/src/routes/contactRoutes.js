import express from "express";
import {
  getAllContact,
  createContact,
  deleteContact,
} from "../Controllers/contactControllers.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/", verifyAdmin, getAllContact);
router.post("/upload", createContact);
router.delete("/:id", verifyAdmin, deleteContact);
export default router;
