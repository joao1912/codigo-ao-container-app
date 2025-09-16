import request from "supertest";
import app from "../src";
import { Server } from "http";

let server: Server;

beforeAll(() => {
  server = app.listen(); 
});

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("deve retornar Hello World", async () => {
    const res = await request(server).get("/");
    expect(res.text).toBe("Hello World!!!");
  });
});
