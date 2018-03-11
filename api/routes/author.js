var express = require('express');
var router = express.Router();

var author = require("../controllers/author");

/* GET home page. */
router.get('/', author.index);
router.get('/:id', author.edit);
router.post('/', author.store);
router.put('/', author.update);
router.delete('/:id', author.destroy);

module.exports = router;
