'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookModel = new Schema({
	title: { 
		type: String, 
		required: true
	},
	author: {
		type: ObjectId,
		ref: 'Author',
		required: true
	},
	category: {
		type: ObjectId,
		ref: 'Category',
		required: true
	}
});

module.exports = mongoose.model(
	'Book', 
	bookModel, 
	'books'
); 