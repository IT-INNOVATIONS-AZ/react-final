const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 8000;
const secretKey = "12345"; // Replace with your own secret key

app.use(cors());
// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Routes
app.post("/login", (req, res) => {
  // Authenticate user
  const user = { id: 1, username: "Vaqif" };
  const token = jwt.sign(user, secretKey);
  res.json({ token });
});

app.post("/logout", (req, res) => {
  // Clear token from client side
  res.sendStatus(200);
});

app.get("/profile", verifyToken, (req, res) => {
  // Protected route, only accessible with a valid JWT token
  res.json({ user: req.user });
});

app.post("/registration", (req, res) => {
  // Register new user
  res.sendStatus(201);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
