var express = require('express');
var router = express.Router();

var category = require("../controllers/category");

/* GET home page. */
router.get('/', category.index);
router.get('/:id', category.edit);
router.post('/', category.store);
router.put('/', category.update);
router.delete('/:id', category.destroy);

module.exports = router;
