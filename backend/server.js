import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/eaglevision";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

// Enable Cross-Origin Resource Sharing (CORS)
// This allows your frontend (React/Next.js) to make API requests to this backend
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
// Enable JSON request parsing (up to 1MB size limit)
// This allows Express to automatically parse incoming JSON payloads
app.use(express.json({ limit: "1mb" }));

// Authentication routes → /api/auth/login, /api/auth/register, etc.
app.use("/api/auth", authRoutes);
// Post routes → /api/posts (GET, POST, PUT, DELETE)
app.use("/api/posts", postRoutes);
// A simple health-check endpoint to verify the API is running
app.get("/api/health", (_req, res) => res.json({ ok: true }));

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
