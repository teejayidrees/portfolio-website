import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
/**
 * Handles admin login:
 * - Compares entered email and password
 * - If valid, returns a signed JWT token
 */

export const adminLogin = async (req, res) => {
  dotenv.config();
  const { email, password } = req.body;

  // 1️⃣ Check email
  if (email !== process.env.ADMIN_EMAIL) {
    console.log("invalid email");
    return res.status(401).json({ message: "Invalid credentials (email)" });
  }

  // 2️⃣ Compare password to hashed password in .env
  const isMatch = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH
  );
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials (password)" });
  }

  // 3️⃣ Create signed token with role
  const token = jwt.sign(
    { email, role: "admin" }, // Include email and role
    process.env.JWT_SECRET,
    { expiresIn: "2d" }
  );

  // 4️⃣ Send token back to frontend
  res.json({ token });
};
