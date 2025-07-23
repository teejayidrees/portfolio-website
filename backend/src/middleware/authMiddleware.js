// middleware/verifyAdmin.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * Middleware to protect admin routes.
 * Expects Authorization header with Bearer token:
 *
 * Authorization: Bearer <token>
 */
export const verifyAdmin = (req, res, next) => {
  // 1️⃣ Get the Authorization header
  const authHeader = req.headers.authorization;
  // 2️⃣ Check if header exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Token not provided or invalid format");
    return res
      .status(401)
      .json({ message: `Token not provided or invalid format ` });
  }

  // 3️⃣ Extract the token string (split at the space after 'Bearer')
  const token = authHeader.split(" ")[1];

  try {
    // 4️⃣ Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Confirm that the token has role 'admin'
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden - Not admin" });
    }

    // 6️⃣ Optionally attach decoded info to request object
    req.admin = decoded;

    // 7️⃣ Continue to route handler
    next();
  } catch (err) {
    console.error("Invalid token", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
