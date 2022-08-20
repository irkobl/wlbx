const express = require('express');
const router = express.Router();
const registerIndex = require('../controllers/registerIndex');
const validator = require ('./validator');

router.get('/register', registerIndex.page);
router.post('/register', validator.verification, registerIndex.reg); //isLength({ min: 5 })

module.exports = router;