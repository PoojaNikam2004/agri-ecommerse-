const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

/* GET ALL ORDERS (ADMIN) */
router.get("/", protect, admin, async (req, res) => {
  try {
    const [orders] = await db.query(`
      SELECT o.*, u.name, u.email 
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.id DESC
    `);

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* UPDATE ORDER STATUS */
router.put("/:id", protect, admin, async (req, res) => {
  const { status } = req.body;

  try {
    await db.query("UPDATE orders SET order_status=? WHERE id=?", [
      status,
      req.params.id,
    ]);

    res.json({ success: true, message: "Order status updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;