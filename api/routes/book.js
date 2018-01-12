var express = require('express');
var router = express.Router();

var book = require("../controllers/book");

/* GET home page. */
router.get('/', book.index);

module.exports = router;
