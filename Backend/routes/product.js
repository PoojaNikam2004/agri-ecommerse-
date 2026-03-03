const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");

const { 
  createProduct, 
  getAllProducts 
} = require("../controllers/productController");


// 👉 GET all products (frontend ke )
router.get("/", getAllProducts);


// 👉 POST product (admin panel ke )
router.post("/", upload.single("image"), createProduct);

module.exports = router;
