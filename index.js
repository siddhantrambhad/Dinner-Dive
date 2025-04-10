const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Debugging: Check if MONGO_URI is loaded
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

console.log("🔗 Connecting to MongoDB...");

// Connect to MongoDB (Removed deprecated options)
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// Simple Route
app.get("/", (req, res) => {
  res.send("🚀 Food Delivery API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
