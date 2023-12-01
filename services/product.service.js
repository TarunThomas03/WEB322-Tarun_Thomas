const Product = require('../models/Product');

const handleResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data);
};

const handleNotFound = (res, entity) => {
  handleResponse(res, { message: `${entity} not found` }, 404);
};

const handleErrorResponse = (res, error, statusCode = 500) => {
  handleResponse(res, { message: error.message }, statusCode);
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    handleResponse(res, products);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product ? handleResponse(res, product) : handleNotFound(res, 'Product');
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    handleResponse(res, savedProduct, 201);
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updatedProduct ? handleResponse(res, updatedProduct) : handleNotFound(res, 'Product');
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    deletedProduct ? handleResponse(res, { message: 'Product deleted successfully' }) : handleNotFound(res, 'Product');
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
