import express from "express";
import { adminLogin } from "../Controllers/adminAuthController.js";
const router = express.Router();
// POST /auth/login
router.post("/login", adminLogin);
export default router;
