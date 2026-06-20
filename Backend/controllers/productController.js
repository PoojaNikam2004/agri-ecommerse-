const db = require("../config/db");

/* CREATE PRODUCT */
exports.createProduct = (req, res) => {

  const { name, description, price, stock, category } = req.body;

  const image = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO products
    (name, description, price, stock, image, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, price, stock, image, category],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        success: true,
        message: "Product Added Successfully",
        productId: result.insertId,
      });
    }
  );
};

/* GET ALL PRODUCTS */
exports.getAllProducts = (req, res) => {

  db.query(
    "SELECT * FROM products ORDER BY id DESC",
    (err, results) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
};

/* GET SINGLE PRODUCT */
exports.getSingleProduct = (req, res) => {

  const { id } = req.params;

  db.query(
    "SELECT * FROM products WHERE id=?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json(result[0]);
    }
  );
};

/* DELETE PRODUCT */
exports.deleteProduct = (req, res) => {

  const { id } = req.params;

  db.query(
    "DELETE FROM products WHERE id=?",
    [id],
    (err) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Product deleted successfully",
      });
    }
  );
};