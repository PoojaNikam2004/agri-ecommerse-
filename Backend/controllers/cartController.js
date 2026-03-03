const Cart = require("../models/cartModel");

exports.addToCart = (req, res) => {
  const { product_id, quantity } = req.body;
  const userId = req.user.id;

  Cart.addToCart(userId, product_id, quantity, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Added to cart" });
  });
};

exports.getCart = (req, res) => {
  const userId = req.user.id;

  Cart.getCart(userId, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

exports.updateQuantity = (req, res) => {
  Cart.updateQuantity(req.params.id, req.body.quantity, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Quantity updated" });
  });
};

exports.removeFromCart = (req, res) => {
  Cart.removeFromCart(req.params.id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Item removed" });
  });
};
