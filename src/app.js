const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

const indexRoutes = require("./routes/indexRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use("/", indexRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => {
    console.log("Servidor Corriendo en http://localhost:3000")
});