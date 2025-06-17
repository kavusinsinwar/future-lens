const mongoose = require("mongoose");

const simulationSchema = new mongoose.Schema({
  decision: String,
  age: String,
  goals: String,
  risk: String,
  detailLevel: String,
  scope: String,
  result: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Simulation", simulationSchema);
