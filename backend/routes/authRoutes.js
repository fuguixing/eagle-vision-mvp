import { Router } from "express";
const router = Router();

/**
 * Define a POST endpoint for user login.
 * Route: /api/auth/login  (this is mounted in server.js as app.use("/api/auth", authRoutes))
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });
  res.json({ user: { id: "demo-user-1", email, name: "Demo Admin" }, token: "demo-token" });
});

export default router;
