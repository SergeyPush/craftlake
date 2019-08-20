const db = require("./../../db/products.json");
const Product = require("./productsModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.status(200).json({
    status: "success",
    products
  });
};

exports.getProduct = async (req, res) => {
  // const result = db.products.find(item => +item.id === +req.params.id);
  const product = await Product.findOne({ _id: req.params.id });
  res.status(200).json({
    status: "success",
    product
  });
};

exports.addNewProduct = async (req, res) => {
  const product = await Product.create({
    ...req.body
  });
  res.status(201).json({
    status: "success",
    data: {
      product
    }
  });
};

exports.updateProduct = (req, res) => {
  console.log(" Updete product");
};

exports.removeProduct = (req, res) => {
  const product = db.products.find(item => +item.id === +req.params.id);
  res.status(200).send(product);
};
