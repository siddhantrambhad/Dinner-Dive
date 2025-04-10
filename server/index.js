const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Check MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
console.log("🔗 Connecting to MongoDB...");
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// Base Route
app.get("/", (req, res) => {
  res.send("🚀 Food Delivery API is Running...");
});

// Import Routes
const authRoutes = require("./routes/auth");
const restaurantRoutes = require("./routes/restaurants");

// Use Routes
app.use("/auth", authRoutes);
app.use("/restaurants", restaurantRoutes); // Add this route

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
