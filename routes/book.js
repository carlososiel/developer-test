const router = require('express').Router(),
	Joi = require('joi'),
	expressJoi = require('express-joi-validator'),
	Book = require('./../models/Book');

const schema = Joi.object({
	body: {
		isbn: Joi.string().required(),
		title: Joi.string().required(),
		author: Joi.string().required(),
		category: Joi.string().required(),
		published_year: Joi.number().min(4).max(4),
		publisher: Joi.string().required()
	},
	params: { id: Joi.string().required() }
});

router.get('/', (req, res, next) => {
	Book.find((err, products) => {
		if (err) return next(err);
		res.json(products);
	});
});

router.get('/:id', expressJoi(schema), (req, res, next) => {
	Book.findById(req.params.id, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.post('/', expressJoi(schema), (req, res, next) => {
	Book.create(req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', expressJoi(schema), (req, res, next) => {
	Book.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', expressJoi(schema), (req, res, next) => {
	Book.findByIdAndRemove(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
