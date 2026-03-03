const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// REGISTER API
router.post("/register", (req, res) => {
  const { name, email, password, phone, address } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All required fields missing" });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";

  db.query(checkSql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertSql =
      "INSERT INTO users (name, email, password, phone, address) VALUES (?,?,?,?,?)";

    db.query(
      insertSql,
      [name, email, hashedPassword, phone, address],
      (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "User Registered Successfully 🎉" });
      }
    );
  });
});



// LOGIN API
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "d",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login Successful ✅",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
});


module.exports = router;
