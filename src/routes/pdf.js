const express = require('express');
const router = express.Router();

const { htmlToPDF } = require('../utils/pdf');
const { getJsonFromBDD } = require('../my-resume');

const FILENAME = 'resume.pdf';


router.get('/', async (req, res) => {
  let pdf = await htmlToPDF(await getJsonFromBDD());
  res.setHeader('Content-Disposition', `inline; filename="${FILENAME}"`);
  res.setHeader('Content-Type', 'application/pdf');
  return res.send(pdf);
});


router.post('/', async (req, res) => {
  let pdf = await htmlToPDF(req.body);
  res.setHeader('Content-Disposition', `inline; filename="${FILENAME}"`);
  res.setHeader('Content-Type', 'application/pdf');
  return res.send(pdf);
});

module.exports = router;
