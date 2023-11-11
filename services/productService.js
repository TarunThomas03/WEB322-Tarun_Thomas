const products = require('../models/products.json');

const getAllProducts = () => {
    return products;
};

const getProductById = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) {
        throw new Error('Not found');
    }
    return product;
};

const createProduct = (productData) => {
    const newProduct = {
        id: products.length + 1,
        ...productData
    };
    products.push(newProduct);
    return newProduct;
};

const updateProduct = (id, productData) => {
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        throw new Error('Not found');
    }
    products[productIndex] = { ...products[productIndex], ...productData };
    return products[productIndex];
};

const deleteProduct = (id) => {
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        throw new Error('Not found');
    }
    products = products.filter(p => p.id !== id);
    return { success: true };
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
