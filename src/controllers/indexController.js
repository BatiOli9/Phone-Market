const fs = require("fs");
const path = require("path");

const productosPath = path.join(__dirname, "../databases/products.JSON");

const controller = {
    index: (req, res) => {
        const productosLeidos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let productosDestacadosFiltrados = productosLeidos.filter( producto => {
            return producto.destacado == true;
        })

        return res.render('index', {productosDestacados: productosDestacadosFiltrados});
}
}

module.exports = controller;