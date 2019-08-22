const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"]
  },
  description: String,
  image: [String],
  price: Number,
  rating: {
    required: true,
    type: Number
  },
  reviews: String
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
