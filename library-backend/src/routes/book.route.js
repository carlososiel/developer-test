'use strict';


const BookController =  require('../controllers/book.controller');

module.exports = [
   {
		method: 'GET',
		path: '/book',
		handler: BookController.list
	},

	{
		method: 'POST',
		path: '/book',
		handler: BookController.create
	},

	{
		method: 'GET',
		path: '/book/{id}',
		handler: BookController.get
	},

	{
		method: 'PATCH',
		path: '/book/{id}',
		handler: BookController.update
	},

	{
		method: 'DELETE',
		path: '/book/{id}',
		handler: BookController.remove
	}
];