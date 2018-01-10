'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const authorModel = new Schema({
	first_name: { 
		type: String, 
		required: true
	},
	last_name: { 
		type: String, 
		required: true
	}
});

module.exports = mongoose.model(
	'Author', 
	authorModel, 
	'authors'
); 