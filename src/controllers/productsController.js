const fs = require("fs");
const path = require("path");

const controller = {
    allProducts: (req, res) => {
        res.send("Hola");
    }
}

module.exports = controller;