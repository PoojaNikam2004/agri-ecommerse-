  // const express = require("express");
  // const router = express.Router();
  // const productController = require("../controllers/productController");
  // 
  // router.get("/", productController.getAllProducts);
  // 
  // // ⭐ SINGLE PRODUCT
  // router.get("/:id", productController.getSingleProduct);
  // 
  // module.exports = router;
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);

router.delete("/:id", productController.deleteProduct);
router.get("/:id", productController.getSingleProduct);
module.exports = router;