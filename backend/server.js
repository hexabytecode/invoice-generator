require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Added CORS settings for local dev
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse JSON data
app.use(express.json());

// API routes
app.post("/api/invoice", (req, res) => {
  /**
   * I want to change the word 'TAX INVOICE' to 'UFFU'
   * Find in the docx file, change the word, return the confirmation
   */
  console.log(req.body);
  res.json({ message: "Invoice created successfully" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
