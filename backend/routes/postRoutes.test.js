import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./postRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/posts", postRoutes);

beforeAll(async () => {
  const uri = process.env.MONGO_URI_TEST || "mongodb://localhost:27017/eaglevision_test";
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe("Posts Routes", () => {
  it("creates and lists posts", async () => {
    const created = await request(app).post("/api/posts").send({ title: "Hello", content: "World" });
    expect(created.statusCode).toBe(201);
    const list = await request(app).get("/api/posts");
    expect(list.statusCode).toBe(200);
    expect(Array.isArray(list.body)).toBe(true);
    expect(list.body.length).toBeGreaterThan(0);
  });
});
