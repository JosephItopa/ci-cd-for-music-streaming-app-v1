const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from my CI/CD pipeline!", status: "healthy" });
});

module.exports = app;