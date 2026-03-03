const db = require("../config/db");

exports.createCategory = (name, callback) => {
  const sql = "INSERT INTO categories (name) VALUES (?)";
  db.query(sql, [name], callback);
};

exports.getAllCategories = (callback) => {
  const sql = "SELECT * FROM categories ORDER BY id DESC";
  db.query(sql, callback);
};

exports.getCategoryById = (id, callback) => {
  const sql = "SELECT * FROM categories WHERE id=?";
  db.query(sql, [id], callback);
};

exports.updateCategory = (id, name, callback) => {
  const sql = "UPDATE categories SET name=? WHERE id=?";
  db.query(sql, [name, id], callback);
};

exports.deleteCategory = (id, callback) => {
  const sql = "DELETE FROM categories WHERE id=?";
  db.query(sql, [id], callback);
};
