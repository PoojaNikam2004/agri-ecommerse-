const db = require("../config/db");

exports.addToCart = (userId, productId, quantity, callback) => {
  const checkSql = "SELECT * FROM cart WHERE user_id=? AND product_id=?";
  
  db.query(checkSql, [userId, productId], (err, result) => {
    if (err) return callback(err);

    if (result.length > 0) {
      const updateSql =
        "UPDATE cart SET quantity = quantity + ? WHERE user_id=? AND product_id=?";
      db.query(updateSql, [quantity, userId, productId], callback);
    } else {
      const insertSql =
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";
      db.query(insertSql, [userId, productId, quantity], callback);
    }
  });
};

exports.getCart = (userId, callback) => {
  const sql = `
    SELECT c.id, p.name, p.price, p.image, c.quantity
    FROM cart c
    JOIN products p ON c.product_id = p.id
    WHERE c.user_id = ?
  `;
  db.query(sql, [userId], callback);
};

exports.updateQuantity = (id, quantity, callback) => {
  const sql = "UPDATE cart SET quantity=? WHERE id=?";
  db.query(sql, [quantity, id], callback);
};

exports.removeFromCart = (id, callback) => {
  const sql = "DELETE FROM cart WHERE id=?";
  db.query(sql, [id], callback);
};

exports.clearCart = (userId, callback) => {
  const sql = "DELETE FROM cart WHERE user_id=?";
  db.query(sql, [userId], callback);
};
