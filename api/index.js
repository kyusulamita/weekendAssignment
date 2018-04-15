const express = require( 'express');
const store = require('./store');

const app = express();

app.use('/products', require('./products'))


module.exports = app;
