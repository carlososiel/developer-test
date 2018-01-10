'use strict';


const CategoryModel =  require('../models/category.model');
const Joi = require('joi');


/**
 * List Categories
 */
exports.list = (req, h) => {
	return CategoryModel.find({}).exec(function (err, categories) {
		if (err) return {
			error: err
		};

		return {
			categories: categories
		};
	});
}


/**
 * Get Category by ID
 */
exports.get = (req, h) => {
	return CategoryModel.findById(req.params.id).exec(function (err, category) {
		if (err) return {
			error: err
		};

		if(!category) return {
			error: 'Category not Found'
		};

		return category
	});
}


/**
 * POST a Category
 */
exports.create = (req, h) => {
	const categoryData = {
		name: req.payload.name
	};

	var schema = {
		name: Joi.string()
			.required()
            .regex(/^[a-zA-Z0-9 ]+$/)
	};

	return Joi.validate(categoryData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return {
			error: err
		};

		return CategoryModel.create(value).then((category) => {
			return category
		}).catch((err) => {
			return {
				error: err
			};
		});
	})
}


/**
 * PATCH | Update Category by ID
 */
exports.update = (req, h) => {
	const categoryData = {};
	if (req.payload.name) {
		categoryData.name = req.payload.name;
	}

	var schema = {
		name: Joi.string()
			.required()
            .regex(/^[a-zA-Z0-9 ]+$/)
	}

	return Joi.validate(categoryData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return {
			error: err
		};

		return CategoryModel.findById(req.params.id).exec(function (err, category) {
			if (err) return {
				error: err
			};

			if (!category) return {
				error: 'Category not found'
			};

			category.set(value);
			return category.save(function (err, updatedCategory) {
				if (err) return {
					error: err
				};

				return updatedCategory;
			});
		});
	});
}


/**
 * Delete Category by ID
 */
exports.remove = (req, h) => {
	return CategoryModel.findById(req.params.id).exec(function (err, category) {
		if (err) return {
			error: err
		};

		if (!category) return {
			error: 'Category not found'
		};

		return category.remove(function (err) {
			if (err) return {
				error: err
			};
		});
	});
}