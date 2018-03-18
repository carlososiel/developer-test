const router = require('express').Router(),
	Joi = require('joi'),
	expressJoi = require('express-joi-validator'),
	Author = require('./../models/Author');

const schema = Joi.object({
	body: {
		name: Joi.string().required(),
		lastname: Joi.string().required()
	},
	params: { id: Joi.string().required() }
});

router.get('/', (req, res, next) => {
	Author.find((err, products) => {
		if (err) return next(err);
		res.json(products);
	});
});

router.get('/:id', expressJoi(schema), (req, res, next) => {
	Author.findById(req.params.id, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.post('/', expressJoi(schema), (req, res, next) => {
	Author.create(req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', expressJoi(schema), (req, res, next) => {
	Author.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', expressJoi(schema), (req, res, next) => {
	Author.findByIdAndRemove(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
