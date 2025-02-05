const express = require('express');
const router = express.Router();

const { profilePicture } = require('../fields');


// Load picture
router.get('/', async (req, res) => {
  let picture = await profilePicture();
  res.setHeader('Content-Type', 'image/jpg');
  res.send(picture);
});

module.exports = router;
