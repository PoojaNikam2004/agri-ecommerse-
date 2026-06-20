const express = require("express");
const router = express.Router();

const db = require("../config/db");
const { protect } = require("../middleware/authMiddleware");

/* PLACE ORDER */
router.post("/place", protect, (req, res) => {

  const { cartItems, totalAmount, address, paymentMethod } = req.body;

  const sql =
    "INSERT INTO orders (user_id, total_amount, payment_method, address) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [req.user.id, totalAmount, paymentMethod, address],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      const orderId = result.insertId;

      let completed = 0;

      cartItems.forEach((item) => {

        db.query(
          "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
          [
            orderId,
            item.id,
            item.quantity,
            item.price,
          ],
          (err2) => {

            if (err2) {
              console.log(err2);
            }

            completed++;

            if (completed === cartItems.length) {
              res.json({
                success: true,
                message: "Order placed successfully",
                orderId,
              });
            }
          }
        );
      });
    }
  );
});

/* MY ORDERS */
router.get("/my-orders", protect, (req, res) => {

  db.query(
    "SELECT * FROM orders WHERE user_id=? ORDER BY id DESC",
    [req.user.id],
    (err, orders) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(orders);
    }
  );
});

module.exports = router;