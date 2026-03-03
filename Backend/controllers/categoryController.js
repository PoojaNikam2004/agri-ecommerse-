const Category = require("../models/categoryModel");

exports.createCategory = (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: "Name required" });

  Category.createCategory(name, (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Category created",
      id: result.insertId
    });
  });
};

exports.getAllCategories = (req, res) => {
  Category.getAllCategories((err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

exports.getCategoryById = (req, res) => {
  Category.getCategoryById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0)
      return res.status(404).json({ message: "Category not found" });

    res.json(results[0]);
  });
};

exports.updateCategory = (req, res) => {
  Category.updateCategory(req.params.id, req.body.name, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category updated" });
  });
};

exports.deleteCategory = (req, res) => {
  Category.deleteCategory(req.params.id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category deleted" });
  });
};
