const Order = require('../models/Order');

const handleResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data);
};

const handleErrorResponse = (res, error, statusCode = 500) => {
  res.status(statusCode).json({ message: error.message });
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user').populate('products');
    handleResponse(res, orders);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products');
    if (!order) {
      handleResponse(res, { message: 'Order not found' }, 404);
    } else {
      handleResponse(res, order);
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    handleResponse(res, savedOrder, 201);
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('user').populate('products');
    if (!updatedOrder) {
      handleResponse(res, { message: 'Order not found' }, 404);
    } else {
      handleResponse(res, updatedOrder);
    }
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      handleResponse(res, { message: 'Order not found' }, 404);
    } else {
      handleResponse(res, { message: 'Order deleted successfully' });
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
