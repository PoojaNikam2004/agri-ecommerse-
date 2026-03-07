const db = require("../config/db");

// ✅ CREATE PRODUCT
exports.createProduct = (req, res) => {
  const { name, description, price, stock, category } = req.body;

  // FIX: image path
  const image = req.file ? "uploads/" + req.file.filename : null;

  const sql = `
    INSERT INTO products 
    (name, description, price, stock, image, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, price, stock, image, category],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "Product created successfully",
        id: result.insertId,
      });
    }
  );
};

// ✅ GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

// ✅ GET SINGLE PRODUCT
exports.getSingleProduct = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM products WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result[0]);
  });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM products WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Product deleted successfully"
    });
  });
};