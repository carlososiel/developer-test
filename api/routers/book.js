var express = require('express');
var router = express.Router();
var Joi = require('joi');
var book = require('../models/book');
var bookValidator = require("../validations/book")

//CRUD Book
router.route('/').post(function (req, res) {
    const ret = Joi.validate(req.body, bookValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: false,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {
        var a = new book();
        a.name = req.body.name;
        a.author = req.body.author;
        a.category = req.body.category;
        a.save(function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.send(doc)
        })
    }
});

router.route('/').get(function (req, res) {
    book.find(function (err, book) {
        if (err) {
            res.send(err);
        }

        res.send(book)
    })
});

router.route('/:book_id').get(function (req, res) {
    book.findById(req.params.book_id, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.send(book)
    })
});

router.route('/:book_id').put(function (req, res) {
    const ret = Joi.validate(req.body, bookValidator, {
        // return an error if body has an unrecognised property
        allowUnknown: true,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
    });

    if (ret.error) {
        res.status(400).end(ret.error.toString());
    } else {
        book.findById(req.params.book_id, function (err, book) {
            if (err) {
                res.send(err);
            }
            book.name = req.body.name;
            book.author = req.body.author;
            book.category = req.body.category;
            book.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send(book)
            })
        })
    }
});

router.route('/:book_id').delete(function (req, res) {
    book.findByIdAndRemove(req.params.book_id, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
});
module.exports = router;