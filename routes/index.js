var express = require('express');
var router = express.Router();
const authIndex = require('../controllers/authIndex');

/* GET home page. */
router.get('/', authIndex.index);

router.post('/', authIndex.auth);

module.exports = router;
