const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

console.log("🔥 Allowed CLIENT_URL for CORS:", process.env.CLIENT_URL);

const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

const app = express();
connectDB();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Optional but helpful for preflight CORS debugging
app.options("*", cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());

app.use("/api/simulate", simulateRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server live at port ${PORT}`);
