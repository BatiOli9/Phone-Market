const fs = require("fs");
const path = require("path");

const productosPath = path.join(__dirname, "../databases/products.JSON");

const controller = {
    products: (req, res) => {
        const productosLeidos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let productosFiltrados = productosLeidos.filter( producto => {
            return producto.stock == true;
        });

        res.render("products", {productos: productosFiltrados});
    },
    productoDetalle: (req, res) => {
        let id = req.params.id;
        const productos = JSON.parse(fs.readFileSync(productosPath, "utf-8"));

        let producto = productos.find(producto => {
            return producto.id == id;
        });

        res.render("detalleProducto", {producto});
    }
}

module.exports = controller;