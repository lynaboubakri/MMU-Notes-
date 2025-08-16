// server.js
const express = require("express");
const path = require("path");
const { google } = require("googleapis");
const multer = require("multer");

// =================== MULTER STORAGE ===================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// =================== GOOGLE AUTH ===================
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json", // make sure this file exists in your project root
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// =================== EXPRESS APP ===================
const app = express();
app.use(express.json());

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =================== FIX: HOMEPAGE ROUTE ===================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main1.html"));
});

// =================== GOOGLE SHEETS ID ===================
const spreadsheetId = "19aMb8tYU3T7JyCyHZoBNkY331NDgcnaLhClkV_JBxNA";

// =================== GET RESOURCES ===================
app.get("/resources", async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const result = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:E",
    });

    const values = result.data.values || [];
    const headers = values[0];
    const rows = values.slice(1);

    const { faculty, level, program, subject } = req.query;

    const filteredRows = rows.filter((row) => {
      const rowFaculty = (row[0] || "").toLowerCase();
      const rowLevel = (row[1] || "").toLowerCase();
      const rowProgram = (row[2] || "").toLowerCase();
      const rowSubject = (row[3] || "").toLowerCase();

      return (
        (!faculty || rowFaculty === faculty.toLowerCase()) &&
        (!level || rowLevel === level.toLowerCase()) &&
        (!program || rowProgram === program.toLowerCase()) &&
        (!subject || rowSubject === subject.toLowerCase())
      );
    });

    res.json([headers, ...filteredRows]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// =================== ADD RESOURCE ===================
app.post("/resources", upload.single("file"), async (req, res) => {
  try {
    const { faculty, level, program, subject } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[faculty, level, program, subject, fileUrl]],
      },
    });

    res.status(200).send("Data added successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// =================== SEARCH PAGE ===================
app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "search.html"));
});

// =================== START SERVER ===================
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ Server running on http://localhost:" + PORT);
});
