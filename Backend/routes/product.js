const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const upload = require("../middleware/upload");

/* ADD PRODUCT */
router.post(
  "/",
  upload.single("image"),
  productController.createProduct
);

/* GET ALL PRODUCTS */
router.get("/", productController.getAllProducts);

/* GET SINGLE PRODUCT */
router.get("/:id", productController.getSingleProduct);

/* DELETE PRODUCT */
router.delete("/:id", productController.deleteProduct);

module.exports = router;