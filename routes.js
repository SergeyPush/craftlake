const express = require("express");
const app = express();
const productsRoutes = require("./src/products/productsRoutes");

app.use("/products", productsRoutes);

module.exports = app;
