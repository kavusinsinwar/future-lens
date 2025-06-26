const express = require("express");
const router = express.Router();
const { handleSimulation } = require("../controllers/simulateController");
const rateLimit = require("express-rate-limit");

// Limit: max 3 requests per minute
const simulationLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: "Too many requests. Please wait and try again.",
});

router.post("/run", simulationLimiter, handleSimulation);

module.exports = router;
