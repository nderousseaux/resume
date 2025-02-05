const express = require('express');
const router = express.Router();

router.use('/', require('./root'));
router.use('/json', require('./json'));
router.use('/pdf', require('./pdf'));
router.use('/picture.jpg', require('./picture'));

module.exports = router;
