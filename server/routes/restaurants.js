const express = require("express");
const router = express.Router();

// Mock restaurant data
const restaurants = [
  {
    id: 1,
    name: "Pizza Planet",
    lat: 21.1458,
    lng: 79.0882,
  },
  {
    id: 2,
    name: "Burger Barn",
    lat: 21.1471,
    lng: 79.0854,
  },
  {
    id: 3,
    name: "Sushi Central",
    lat: 21.1463,
    lng: 79.0902,
  },
];

// GET /restaurants
router.get("/", (req, res) => {
  res.json(restaurants);
});

module.exports = router;
