var express = require('express');
var router = express.Router();
var Joi = require('joi');
var author = require('../models/author');
var authorValidator = require("../validations/author")

//CRUD Author
router.route('/').post(function (req, res) {
    const ret = Joi.validate(req.body, authorValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: false,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {
        var a = new author();
        a.first_name = req.body.first_name;
        a.last_name = req.body.last_name;
        a.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.send({ message: 'Author Created !' })
        })
    }
});

router.route('/').get(function (req, res) {
    author.find(function (err, authors) {
        if (err) {
            res.send(err);
        }

        res.send(authors)
    })
});

router.route('/:author_id').get(function (req, res) {
    author.findById(req.params.author_id, function (err, author) {
        if (err) {
            res.send(err);
        }
        res.send(author)
    })
});

router.route('/:author_id').put(function (req, res) {
    const ret = Joi.validate(req.body, authorValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: true,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {
        author.findById(req.params.author_id, function (err, author) {
            if (err) {
                res.send(err);
            }
            author.first_name = req.body.first_name;
            author.last_name = req.body.last_name;
            author.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send(author)
            })
        })
    }
});

router.route('/:author_id').delete(function (req, res) {
    author.findByIdAndRemove(req.params.author_id, function (err, author) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});
module.exports = router;