import request from "supertest";
import express from "express";
import authRoutes from "./authRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

describe("Auth Routes", () => {
  it("returns user on login", async () => {
    const res = await request(app).post("/api/auth/login").send({ email: "a@b.com", password: "123" });
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.token).toBeDefined();
  });
  it("fails without credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({});
    expect(res.statusCode).toBe(400);
  });
});
