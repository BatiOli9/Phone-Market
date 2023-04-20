const express = require("express");
const { products } = require("../controllers/productsController");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* Todos los productos */
router.get('/products', productsController.products);

/* Detalle de los productos */
router.get("/detalleProducto/:id/", productsController.productoDetalle);

/* Formulario de creacion de productos */

module.exports = router;