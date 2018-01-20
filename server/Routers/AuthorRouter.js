var express = require('express');
var routes = function(){
    var authorRouter = express.Router();
    var authorController = require('../Controllers/AuthorController')();
    authorRouter.route('/')
        .post(authorController.create)
        .get(authorController.getAll);

    authorRouter.route('/:id')
        .get(authorController.getById)
        .put(authorController.update)
        .delete(authorController.remove);
    return authorRouter;
};

module.exports = routes;
