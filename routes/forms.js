var express = require('express');
var router = express.Router();
const formsIndex = require('../controllers/formsIndex');
const authWithToken = require('../midleware/authWithToken');

/* GET home page. */
router.get('/forms', authWithToken, formsIndex.forms);
router.post('/forms', authWithToken, formsIndex.blog);
module.exports = router;