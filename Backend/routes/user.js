const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const db = require("../config/db");

router.get("/profile", authMiddleware, (req, res) => {

  const sql = "SELECT id,name,email FROM users WHERE id=?";

  db.query(sql, [req.user.id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });

});

module.exports = router;