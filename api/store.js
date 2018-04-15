// Use Container instead of DataStore on the server
const { Container } = require('js-data');
const adapter = require('./adapter');

// Create a store to hold your Mappers
const store = new Container();

// Mappers in "store" will use the Sql adapter by default
store.registerAdapter('sql', adapter, { 'default': true });


store.defineMapper('product');


module.exports = store;
