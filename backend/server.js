const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/AuthRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
        "http://localhost:4173",
      "http://localhost:5173",
      "https://your-vercel-url.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`!!! Server running on port ${PORT}`);
});