const express = require('express');
const router = express.Router();

const { getJsonFromBDD } = require('../my-resume');


router.get('/', async (req, res) => {
  let json = await getJsonFromBDD();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(json, null, 2));
});

module.exports = router;
