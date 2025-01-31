const express = require('express');
const theme = require("jsonresume-theme-stackoverflow");

const json_builder = require('./json-builder');

const app = express()


app.get('/', async (req, res) => {
  let file = await json_builder();
  res.send(theme.render(file));
})

module.exports = app