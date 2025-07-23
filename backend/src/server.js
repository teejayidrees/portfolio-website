// server.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import cors from "cors";
import articleRoute from "./routes/articleRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Set up app
const app = express();
dotenv.config();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/articles", articleRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/admin", adminRoutes);
// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
