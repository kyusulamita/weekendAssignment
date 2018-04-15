const conn = require('./conn');
// const b
const Bluebird = require('bluebird');
const { models } = conn;
const Product = models.product;
const allProducts = Bluebird.map(['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'], (name) => Product.create({name}));


module.exports = () => allProducts;
