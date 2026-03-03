const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createCategory);
router.put("/:id", protect, updateCategory);
router.delete("/:id", protect, deleteCategory);

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

module.exports = router;
