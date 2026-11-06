const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("responds with a healthy status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });
});