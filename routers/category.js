var express = require('express');
var router = express.Router();
var category = require('../models/category');

//CRUD Category
router.route('/').post(function (req, res) {  
    var c = new category();
    c.name = req.body.name;
    console.log("--- "+ req.body);
    console.log("--- "+ req.body.name);
    c.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Category Created !' })
    })
});

router.route('/').get(function (req, res) {
    category.find(function (err, categories) {
        if (err) {
            res.send(err);
        }
        
        res.send(categories)
    })
});

router.route('/:category_id').get(function (req, res) {
    category.findById(req.params.category_id,function (err, category) {
        if (err) {
            res.send(err);
        }        
        res.send(category)
    })
});

router.route('/:category_id').put(function (req, res) {
    category.findById(req.params.category_id,function (err, categ) {
        if (err) {
            res.send(err);
        }
        categ.name = req.body.name;      
        categ.save(function (err) {
            if (err) {
                res.send(err);
            }            
            res.send(categ)
        })         
    })
});

router.route('/:category_id').delete(function (req, res) {
    category.findByIdAndRemove(req.params.category_id,function (err, categ) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });       
    })
});
module.exports = router;