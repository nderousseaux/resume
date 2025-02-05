const express = require('express');
const router = express.Router();

const theme = require('../theme');
const { getJsonFromBDD } = require('../my-resume');


// Get my resume from database
router.get('/', async (req, res) => {
  let file = await getJsonFromBDD();
  res.send(theme.render(file));
});

router.post('/', async (req, res) => {
  res.send(theme.render(req.body));
});

module.exports = router;
