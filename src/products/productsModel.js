const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: [String]
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
