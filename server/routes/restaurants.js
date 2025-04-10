const express = require("express");
const router = express.Router();

// Mock data route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Pizza Planet", location: "Sector 9" },
    { id: 2, name: "Burger World", location: "Sector 5" }
  ]);
});

module.exports = router;
