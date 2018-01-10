'use strict';


const CategoryController =  require('../controllers/category.controller');

module.exports = [
   {
		method: 'GET',
		path: '/category',
		handler: CategoryController.list
	},

	{
		method: 'POST',
		path: '/category',
		handler: CategoryController.create
	},

	{
		method: 'GET',
		path: '/category/{id}',
		handler: CategoryController.get
	},

	{
		method: 'PATCH',
		path: '/category/{id}',
		handler: CategoryController.update
	},

	{
		method: 'DELETE',
		path: '/category/{id}',
		handler: CategoryController.remove
	}
];