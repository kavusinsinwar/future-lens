const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

console.log("🔥 Allowed CLIENT_URL for CORS:", process.env.CLIENT_URL);

const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

const app = express();
connectDB();

// ✅ Add this middleware to log each incoming origin
app.use((req, res, next) => {
  console.log("🔄 Incoming request from:", req.headers.origin);
  next();
});

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.options("*", cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());

console.log("Mounting auth route...");
app.use("/api/auth", authRoutes);

console.log("Mounting simulate route...");
app.use("/api/simulate", simulateRoutes);

app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log("✅ Registered route:", r.route.path);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server live at port ${PORT}`);
});
