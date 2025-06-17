// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

const app = express();

// 🔍 Monkey patch app.use to log all path inputs
const originalUse = app.use.bind(app);
app.use = function (...args) {
  const firstArg = args[0];
  if (typeof firstArg === "string" && firstArg.includes("http")) {
    console.error("🚨 Invalid path passed to app.use():", firstArg);
    console.trace("🔍 Stack trace:");
  }
  return originalUse(...args);
};

// ✅ Connect to DB
connectDB();

// ✅ CORS setup
console.log("🔥 Allowed CLIENT_URL for CORS:", process.env.CLIENT_URL);
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.options("*", cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
console.log("Mounting auth route...");
app.use("/api/auth", authRoutes);

console.log("Mounting simulate route...");
app.use("/api/simulate", simulateRoutes);

// ✅ Log registered routes
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log("🔗 Registered route:", r.route.path);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server live at port ${PORT}`);
});
