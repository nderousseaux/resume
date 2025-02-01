const express = require('express');
const theme = require("jsonresume-theme-stackoverflow");

const json_builder = require('./json-builder');

const app = express()

const { image } = require('./fields');

app.get('/', async (req, res) => {
  let file = await json_builder();
  res.send(theme.render(file));
})

app.get('/picture.jpg', async (req, res) => {
  let picture = await image();
  res.setHeader('Content-Type', 'image/jpg');
  res.send(picture);
})

module.exports = app