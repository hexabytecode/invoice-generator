require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// API routes
app.post("/api/invoice", (req, res) => {
  res.json({ message: "Invoice created successfully" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
