const fs = require("fs");
const path = require("path");

const controller = {
    login: (req, res) => {
        res.send("Hola");
    }
}

module.exports = controller;