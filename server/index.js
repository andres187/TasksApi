const express = require('express');
const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();

const logger = require('./config/logger');
const api = require('./api/v1');
const database = require('./database');

// Connect to database
database.connect();

const app = express();

// setup middleware
app.use(addRequestId);
app.use(logger.requests);

// form
app.use(bodyParser.urlencoded({ extended: false }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.use('/api', api);
app.use('/api/v1', api);

// No route found handler
app.use((req, res, next) => {
  const message = 'Route not found';
  const statusCode = 404;

  next({
    message,
    statusCode,
    type: 'info',
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message, type = 'error' } = err;
  let { statusCode = 500 } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  // Validation Errors
  if (err.message.startsWith('ValidationError')) {
    statusCode = 422;
  }

  logger[type](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
