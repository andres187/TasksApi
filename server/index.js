const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/v1');

const app = express();

// form
app.use(bodyParser.urlencoded({ extended: false }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Resource Not Found (404)',
  });
});

app.use((err, req, res, next) => {
  const { message = 'Server Error (500)' } = err;

  res.status(500);
  res.json({
    message,
  });
});

module.exports = app;
