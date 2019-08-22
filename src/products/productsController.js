const db = require("./../../db/products.json");
const Product = require("./productsModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      products
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.addNewProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body
    });
    res.status(201).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.status(204).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};
