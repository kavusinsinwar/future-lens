const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// ROUTES
const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

require("dotenv").config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// ✅ Mount the routes with base paths
app.use("/api/simulate", simulateRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
