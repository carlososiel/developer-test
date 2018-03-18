const router = require('express').Router(),
	Joi = require('joi'),
	expressJoi = require('express-joi-validator'),
	Category = require('./../models/Category');

const schema = Joi.object({
	body: { name: Joi.string().required() },
	params: { id: Joi.string().required() }
});

router.get('/', (req, res, next) => {
	Category.find((err, products) => {
		if (err) return next(err);
		res.json(products);
	});
});

router.get('/:id', expressJoi(schema), (req, res, next) => {
	Category.findById(req.params.id, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.post('/', expressJoi(schema), (req, res, next) => {
	Category.create(req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', expressJoi(schema), (req, res, next) => {
	Category.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', expressJoi(schema), (req, res, next) => {
	Category.findByIdAndRemove(req.params.id, req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
