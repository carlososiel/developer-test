'use strict';

const mongoose = require('mongoose');
const BookModel =  require('../models/book.model');
const Joi = require('joi');


/**
 * List Books
 */
exports.list = (req, h) => {
	const filters = {}
	if (req.query.author) {
		filters.author = mongoose.Types.ObjectId(req.query.author)
	}
	if (req.query.category) {
		filters.category = mongoose.Types.ObjectId(req.query.category)
	}
	
	return BookModel.find(filters).populate('author').populate('category').exec(function (err, books) {
		if (err) return { 
			error: err
		};
		
		return { 
			books: books
		};
	});
}


/**
 * Get Book by ID
 */
exports.get = (req, h) => {
	return BookModel.findById(req.params.id).populate('author').populate('category').exec(function (err, book) {
		if (err) return { 
			error: err
		};
		
		if(!book) return { 
			error: 'Book not Found' 
		};
		
		return book
	});
}


/**
 * POST a Book
 */
exports.create = (req, h) => {
	const bookData = {
		title: req.payload.title,
		category: req.payload.category,
		author: req.payload.author
	};
  
	var schema = {
		title: Joi.string()
			.required(),
		category: Joi.string()
			.required(),
		author: Joi.string()
			.required()
	}
	  
	return Joi.validate(bookData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return { 
			error: err
		};
		
		value.category = mongoose.Types.ObjectId(value.category)
		value.author = mongoose.Types.ObjectId(value.author)
	
		return BookModel.create(value).then((book) => {
			return book
		}).catch((err) => {
			return { 
				error: err 
			};
		});
	})
}


/**
 * PATCH | Update Book by ID
 */
exports.update = (req, h) => {	
	const bookData = {};
	if (req.payload.title) {
		bookData.title = req.payload.title;
	}
	if (req.payload.category) {
		bookData.category = req.payload.category;
	}
	if (req.payload.author) {
		bookData.author = req.payload.author;
	}
  
	var schema = {  
		title: Joi.string(),
		category: Joi.string(),
		author: Joi.string(),
	}
  
	return Joi.validate(bookData, schema, {
		language: {}
	}, (err, value) => {
		if (err) return { 
			error: err
		};
		
		return BookModel.findById(req.params.id).exec(function (err, book) {
			if (err) return { 
				error: err
			};
		
			if (!book) return { 
				error: 'Book not found'
			};
			
			value.category = mongoose.Types.ObjectId(value.category)
			value.author = mongoose.Types.ObjectId(value.author)
		  
			book.set(value);
			return book.save(function (err, updatedBook) {
				if (err) return { 
					error: err
				};
				
				return updatedBook
			});
		});
	});
}


/**
 * Delete Book by ID
 */
exports.remove = (req, h) => {
	return BookModel.findById(req.params.id).exec(function (err, book) {
		if (err) return { 
			error: err
		};
	
		if (!book) return { 
			error: 'Book not found'
		};

		return book.remove(function (err) {
			if (err) return { 
				error: err 
			};
		});
	});
}