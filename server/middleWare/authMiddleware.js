const jwt = require("jsonwebtoken");
app.use((req, res, next) => {
  console.log(`🛰️  Incoming: ${req.method} ${req.originalUrl} from ${req.headers.origin}`);
  next();
});

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;  // Attach user ID to req object for later use
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = protect;
