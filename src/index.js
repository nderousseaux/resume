const express = require('express');
const theme = require("jsonresume-theme-stackoverflow");
const json_builder = require('./json-builder');

const app = express()

app.use(express.json());

const { image } = require('./fields');

const createPdf = require('./html-pdf');

app.get('/', async (req, res) => {
  let file = await json_builder();
  res.send(theme.render(file));
})

app.get('/pdf', async (req, res) => {
  let file = await json_builder();

  let pdf = await createPdf(file, 'jsonresume-theme-stackoverflow');

  pdf = Buffer.from(pdf, 'base64');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  res.send(pdf);
})

app.get('/picture.jpg', async (req, res) => {
  let picture = await image();
  res.setHeader('Content-Type', 'image/jpg');
  res.send(picture);
})


app.post('/' , async (req, res) => {
  res.send(theme.render(req.body));
})

app.get('/json', async (req, res) => {
  let json = await json_builder();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(json, null, 2));
})

app.post('/pdf', async (req, res) => {
  let pdf = await createPdf(req.body, 'jsonresume-theme-stackoverflow');

  pdf = Buffer.from(pdf, 'base64');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  // Save to file
  res.send(pdf);
})

module.exports = app