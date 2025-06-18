const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

const app = express();

// ✅ Log requests (for CORS debugging)
app.use((req, res, next) => {
  console.log("🛰️", req.method, req.originalUrl, "| Origin:", req.headers.origin);
  next();
});

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS Configuration
console.log("🔥 Allowed CLIENT_URL:", process.env.CLIENT_URL);
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.options("*", cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

// ✅ JSON Parser
app.use(express.json());

// ✅ Routes
console.log("🔐 Mounting /api/auth");
app.use("/api/auth", authRoutes);

console.log("🧠 Mounting /api/simulate");
app.use("/api/simulate", simulateRoutes);

// ✅ Log Registered Routes
app._router.stack.forEach(r => {
  if (r.route && r.route.path) {
    console.log("🔗 Registered route:", r.route.path);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

