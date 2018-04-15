const express = require('express');
const path = require('path');


const app = express();


// setting up static routing
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/templates', express.static(path.join(__dirname, 'client', 'templates')));
// will add backend in later
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/api', require('./api'))

// serve up the index html
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


module.exports = app;
