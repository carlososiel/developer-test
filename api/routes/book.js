var express = require('express');
var router = express.Router();

var book = require("../controllers/book");

/* GET home page. */
router.get('/', book.index);
router.get('/:id', book.edit);
router.post('/', book.store);
router.put('/', book.update);
router.delete('/:id', book.destroy);

module.exports = router;
