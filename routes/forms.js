var express = require('express');
var router = express.Router();
const formsIndex = require('../controllers/formsIndex');

/* GET home page. */
router.get('/forms', formsIndex.forms);
router.post('/forms', formsIndex.blog);

module.exports = router;