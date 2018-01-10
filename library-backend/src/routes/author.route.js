'use strict';


const AuthorController =  require('../controllers/author.controller');

module.exports = [
   {
		method: 'GET',
		path: '/author',
		handler: AuthorController.list
	},

	{
		method: 'POST',
		path: '/author',
		handler: AuthorController.create
	},

	{
		method: 'GET',
		path: '/author/{id}',
		handler: AuthorController.get
	},

	{
		method: 'PATCH',
		path: '/author/{id}',
		handler: AuthorController.update
	},

	{
		method: 'DELETE',
		path: '/author/{id}',
		handler: AuthorController.remove
	}
];