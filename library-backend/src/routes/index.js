'use strict';


const book = require('./book.route');
const author = require('./author.route');
const category = require('./category.route');

module.exports = [].concat(
	category, 
	author, 
	book
);