const db = require("../config/db");

exports.createOrder = (userId, total, callback) => {
  const sql = "INSERT INTO orders (user_id, total) VALUES (?, ?)";
  db.query(sql, [userId, total], callback);
};

exports.createOrderItems = (items, orderId, callback) => {
  const values = items.map(i => [orderId, i.product_id, i.quantity, i.price]);

  const sql = `
    INSERT INTO order_items (order_id, product_id, quantity, price)
    VALUES ?
  `;

  db.query(sql, [values], callback);
};

exports.getUserOrders = (userId, callback) => {
  const sql = `
    SELECT * FROM orders WHERE user_id=? ORDER BY id DESC
  `;
  db.query(sql, [userId], callback);
};

exports.getAllOrders = (callback) => {
  const sql = `
    SELECT o.*, u.name, u.email
    FROM orders o
    JOIN users u ON o.user_id = u.id
    ORDER BY o.id DESC
  `;
  db.query(sql, callback);
};
