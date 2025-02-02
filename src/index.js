const express = require('express');
const theme = require("jsonresume-theme-stackoverflow");
const json_builder = require('./json-builder');

const app = express()

const { image } = require('./fields');

const createPdf = require('./html-pdf');

app.get('/', async (req, res) => {
  let file = await json_builder();
  res.send(theme.render(file));
})

app.get('/pdf', async (req, res) => {
  let file = await json_builder();

  let pdf = await createPdf(file, 'resume', 'jsonresume-theme-stackoverflow', '.pdf');

  pdf = Buffer.from(pdf, 'base64');

  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdf);
})

app.get('/picture.jpg', async (req, res) => {
  let picture = await image();
  res.setHeader('Content-Type', 'image/jpg');
  res.send(picture);
})

app.get('/json', async (req, res) => {
  let json = await json_builder();
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
})

module.exports = app