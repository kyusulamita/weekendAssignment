
const express = require( 'express');
const store = require('./store');
const { models } = require('../db');
const { Product } = models;
const app = express();

app.get('/', function(req, res){
  Product.findAll()
  .then(products => res.send(products))
  .catch(err => console.log(err));
})

app.post('/', function(req, res){
  Product.create(req.body)
  .then(product => res.send(product))
  .catch(err => console.log(err));
})

app.put('/:id', function(req, res){
  Product.update(req.body, {
    where: { id: req.params.id},
    returning: true,
  })
  .then(function([productNum, productsAffected]){
    res.send(productsAffected[0]);
  })
  .catch(err => console.log(err));
})

app.delete('/:id', function(req,res){
  Product.destroy({
    where: { id: req.params.id }
  })
  .then(res.send('destroyed'))
  .catch(err => console.log(err))
})

module.exports = app;
