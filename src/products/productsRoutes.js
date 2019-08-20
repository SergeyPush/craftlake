const express = require("express");
const router = express.Router();
const productsController = require("./productsController");

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProduct);
router.post("/", productsController.addNewProduct);
router.patch("/:id", productsController.updateProduct);
router.delete("/:id", productsController.removeProduct);

module.exports = router;
