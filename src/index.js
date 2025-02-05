const express = require('express');
const app = express()

// Use the express.json() middleware to parse the request body
app.use(express.json());

// All routes are defined in the routes module
const routes = require('./routes');
app.use('/', routes);

module.exports = app