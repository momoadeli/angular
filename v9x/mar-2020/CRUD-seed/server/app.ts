const fakeUser = require('./shared/fake-data/user.fake');
const express = require('express');

// Create a new express application instance
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res, next) => {
  return res.status(201).json({
    data: null
  });
});

app.get('/api/products', (req, res, next) => {

});

app.get('/api/login', (req, res, next) => {

  return res.status(201).json({
    data: fakeUser
  });
});

module.exports = app;
