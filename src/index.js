const express = require('express');
const theme = require("jsonresume-theme-stackoverflow");
const file = require('../resume.json');

const app = express()


app.get('/', (req, res) => {
  res.send(theme.render(file));
})

module.exports = app