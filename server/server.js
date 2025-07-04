const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const simulateRoutes = require("./routes/simulate");
const authRoutes = require("./routes/auth");

const app = express();


app.use((req, res, next) => {
  console.log("🛰️", req.method, req.originalUrl, "| Origin:", req.headers.origin);
  next();
});


connectDB();


const allowedOrigins = [
  "https://future-lens.vercel.app",
  "https://future-lens.onrender.com",
  "http://localhost:3001",
];

console.log("🔥 Allowed Origins for CORS:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-side tools or curl requests without origin
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`❌ Blocked by CORS: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.options("*", cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));


app.use(express.json());


console.log("🔐 Mounting /api/auth");
app.use("/api/auth", authRoutes);

console.log("🧠 Mounting /api/simulate");
app.use("/api/simulate", simulateRoutes);


app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log("🔗 Registered route:", r.route.path);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
