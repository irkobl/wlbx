const express = require('express');
const router = express.Router();
const registerIndex = require('../controllers/registerIndex');

router.get('/register', registerIndex.page);
router.post('/register', registerIndex.reg);

module.exports = router;