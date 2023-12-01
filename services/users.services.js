const User = require('../models/User');

const handleResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data);
};

const handleNotFound = (res, entity) => {
  handleResponse(res, { message: `${entity} not found` }, 404);
};

const handleErrorResponse = (res, error, statusCode = 500) => {
  handleResponse(res, { message: error.message }, statusCode);
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    handleResponse(res, users);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user ? handleResponse(res, user) : handleNotFound(res, 'User');
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    handleResponse(res, savedUser, 201);
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updatedUser ? handleResponse(res, updatedUser) : handleNotFound(res, 'User');
  } catch (error) {
    handleErrorResponse(res, error, 400);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    deletedUser ? handleResponse(res, { message: 'User deleted successfully' }) : handleNotFound(res, 'User');
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
