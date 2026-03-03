const express = require("express");
const router = express.Router();
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

/* PLACE ORDER */
router.post("/place", authMiddleware, async (req, res) => {
  const { cartItems, totalAmount, address, paymentMethod } = req.body;

  try {
    const [orderResult] = await db.query(
      "INSERT INTO orders (user_id, total_amount, payment_method, address) VALUES (?, ?, ?, ?)",
      [req.user.id, totalAmount, paymentMethod, address]
    );

    const orderId = orderResult.insertId;

    for (let item of cartItems) {
      await db.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.id, item.quantity, item.price]
      );
    }

    res.json({ success: true, message: "Order placed successfully", orderId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/* USER ORDERS */
router.get("/my-orders", authMiddleware, async (req, res) => {
  try {
    const [orders] = await db.query(
      "SELECT * FROM orders WHERE user_id=? ORDER BY id DESC",
      [req.user.id]
    );

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ORDER DETAILS */
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const [order] = await db.query(
      "SELECT * FROM orders WHERE id=? AND user_id=?",
      [req.params.id, req.user.id]
    );

    const [items] = await db.query(
      `SELECT oi.*, p.name, p.image 
       FROM order_items oi 
       JOIN products p ON oi.product_id=p.id 
       WHERE oi.order_id=?`,
      [req.params.id]
    );

    res.json({ ...order[0], items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
