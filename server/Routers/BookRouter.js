var express = require('express');
var routes = function(){
    var bookRouter = express.Router();
    var bookController = require('../Controllers/BookController')();
    bookRouter.route('/')
        .post(bookController.create)
        .get(bookController.getAll);

    bookRouter.route('/:id')
        .get(bookController.getById)
        .put(bookController.update)
        .delete(bookController.remove);
    return bookRouter;
};

module.exports = routes;