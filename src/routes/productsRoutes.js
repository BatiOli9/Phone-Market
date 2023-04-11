const express = require("express");
const { products } = require("../controllers/productsController");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get('/products', productsController.products);
router.get("/productoDetalle/:id/", productsController.productoDetalle);

module.exports = router;