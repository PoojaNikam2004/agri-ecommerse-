const db = require("../config/db");


// ✅ CREATE PRODUCT  (POST)
exports.createProduct = (req, res) => {
  const { name, description, price, stock, category } = req.body;

  const image = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO products 
    (name, description, price, stock, image, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, description, price, stock, image, category], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Product created successfully",
      id: result.insertId
    });
  });
};


// ✅ GET ALL PRODUCTS  (NEW FUNCTION)
exports.getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
