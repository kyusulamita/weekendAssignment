const conn = require('./conn');
const { Sequelize } = conn;

const Product = conn.define('product', {
  name: Sequelize.STRING
  }, {
  defaultScope: {
    attributes: ['name', 'id'],
  }
});

module.exports = Product;
