import { Router } from "express";
import Post from "../models/Post.js";
const router = Router();

router.get("/", async (_req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/", async (req, res) => {
  const { title, content } = req.body || {};
  if (!title) return res.status(400).json({ message: "Title is required" });
  const created = await Post.create({ title, content });
  res.status(201).json(created);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Not found" });
  res.json(post);
});

router.put("/:id", async (req, res) => {
  const { title, content } = req.body || {};
  const updated = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Post.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ ok: true });
});

export default router;
