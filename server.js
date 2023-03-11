const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const users = require("./users");
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

const verifyTokenAndPermission = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      const userPermission = users.find(
        (u) => u.username === user.username
      )?.permission;
      if (!userPermission || !allowedPermissions.includes(userPermission)) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Allowed permissions
const allowedPermissions = ["admin", "editor", "viewer"];

// Routes
app.get("/permission", verifyToken, (req, res) => {
  // Get user permission
  const userPermission = users.find(
    (u) => u.username === req.user.username
  )?.permission;
  res.json({ permission: userPermission });
});

// Add 5 users with permission to the code
users.forEach((user) => {
  app.get(
    `/permission/${user.username}`,
    verifyTokenAndPermission,
    (req, res) => {
      res.json({ permission: user.permission });
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
