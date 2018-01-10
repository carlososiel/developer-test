'use strict';


const AuthorModel =  require('../models/author.model');
const Joi = require('joi');


/**
 * List Authors
 */
exports.list = (req, h) => {
	return AuthorModel.find({}).exec(function (err, authors) {
		if (err) return { 
			error: err
		};
		
		return {
            authors: authors
		}
	});
}


/**
 * Get Author by ID
 */
exports.get = (req, h) => {
	return AuthorModel.findById(req.params.id).exec(function (err, author) {		
		if (err) return { 
			error: err
		};
		
		if(!author) return { 
			error: 'Author not Found' 
		};
		
		return author
	});
}


/**
 * POST a Author
 */
exports.create = (req, h) => {
	const authorData = {
		first_name: req.payload.first_name,
		last_name: req.payload.last_name
	};
  
	var schema = {  
		first_name: Joi.string()
			.required()
			.min(2)
			.max(30)
			.regex(/^[a-zA-Z ]+$/),
		last_name: Joi.string()
			.required()
			.min(2)
			.max(30)
			.regex(/^[a-zA-Z ]+$/)
	}
	  
	return Joi.validate(authorData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return { 
			error: err
		};
	
		return AuthorModel.create(value).then((author) => {
			return author
		}).catch((err) => {
			return { 
				error: err 
			};
		});
	})
}


/**
 * PATCH | Update Author by ID
 */
exports.update = (req, h) => {	
	const authorData = {};
	if (req.payload.first_name) {
		authorData.first_name = req.payload.first_name;
	}
	if (req.payload.first_name) {
		authorData.first_name = req.payload.first_name;
	}
  
	var schema = {  
		first_name: Joi.string()
			.min(2)
			.max(30)
			.regex(/^[a-zA-Z ]+$/),
		last_name: Joi.string()
			.min(2)
			.max(30)
			.regex(/^[a-zA-Z ]+$/)
	}
  
	return Joi.validate(authorData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return { 
			error: err
		};
		
		return AuthorModel.findById(req.params.id).exec(function (err, author) {
			if (err) return { 
				error: err
			};
		
			if (!author) return { 
				error: 'Author not found'
			};
		  
			author.set(value);
			return author.save(function (err, updatedAuthor) {
				if (err) return { 
					error: err
				};
				
				return updatedAuthor
			});
		});
	});
}


/**
 * Delete Author by ID
 */
exports.remove = (req, h) => {
	return AuthorModel.findById(req.params.id).exec(function (err, author) {
		if (err) return { 
			error: err
		};
	
		if (!author) return { 
			error: 'Author not found'
		};

		return author.remove(function (err) {
			if (err) return { 
				error: err 
			};
		});
	});
}