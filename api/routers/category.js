var express = require('express');
var router = express.Router();
var Joi = require('joi');
var category = require('../models/category');
var categoryValidator = require("../validations/category")

//CRUD Category
router.route('/').post(function (req, res) {

    const ret = Joi.validate(req.body, categoryValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: false,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {

        var c = new category();
        c.name = req.body.name;
        c.save(function (err,doc) {
            if (err) {
                res.send(err);
            }
            console.log("added");
            res.send(doc)
        })
    }
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
    category.findById(req.params.category_id, function (err, category) {
        if (err) {
            res.send(err);
        }
        res.send(category)
    })
});

router.route('/:category_id').put(function (req, res) {

    const ret = Joi.validate(req.body, categoryValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: true,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {
        category.findById(req.params.category_id, function (err, category) {
            if (err) {
                res.send(err);
            }
            category.name = req.body.name;
            category.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send(category)
            })
        })
    }
});

router.route('/:category_id').delete(function (req, res) {
    category.findByIdAndRemove(req.params.category_id, function (err, category) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});
module.exports = router;