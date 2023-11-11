let users = require('../models/users.json');

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const createUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        ...userData
    };
    users.push(newUser);
    return newUser;
};

const updateUser = (id, userData) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        throw new Error('User not found');
    }
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
};

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        throw new Error('Not found');
    }
    users = users.filter(user => user.id !== id);
    return { success: true };
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
