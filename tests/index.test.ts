import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("deve retornar Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello World!!!");
  });
});
