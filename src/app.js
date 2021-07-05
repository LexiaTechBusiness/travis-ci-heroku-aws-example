const express = require('express');
const testController = require('./controller/test.controller');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('New feature added!!!');
});

app.get('/test', testController.test);

module.exports = app;
