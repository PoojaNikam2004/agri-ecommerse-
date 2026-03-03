const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateQuantity,
  removeFromCart
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");


router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.put("/:id", protect, updateQuantity);
router.delete("/:id", protect, removeFromCart);

module.exports = router;
