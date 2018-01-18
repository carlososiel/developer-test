var routes = function(){
    var express = require('express');
    var categoryRouter = express.Router();

    var categoryController = require('../Controllers/CategoryController')();
    categoryRouter.route('/')
        .post(categoryController.create)
        .get(categoryController.getAll);

    categoryRouter.route('/:id')
        .get(categoryController.getById)
        .put(categoryController.update)
        .delete(categoryController.remove);
    return categoryRouter;
};

module.exports = routes;
