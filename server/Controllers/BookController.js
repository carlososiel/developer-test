var Book = require('../Models/BookModel');
var BookController = function () {
    var create = function (req, res, next) {
        Book.create(req.body,function (err,boo) {
            if(err)
                return next(err);
            res.status(201).json(boo);
        });
    };

    var getAll = function (req,res, next) {
        var query={};
        if(req.query.author)
            query.author = req.query.author;
        if(req.query.category)
            query.category = req.query.category;

        Book.find(query)
            .populate('author')
            .populate('category')
            .exec(function (err,boo){
                if(err)
                    return next(err);
                else {
                    var returnBooks = [];
                    boo.forEach(function(element, index, array){
                        var newBook = element.toJSON();
                        newBook.links= {};
                        newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                        returnBooks.push(newBook);
                    });
                    res.status(200).json(returnBooks);
                }
            });
    };

    var getById = function (req,res, next) {
        Book.findById(req.params.id)
            .populate('author')
            .populate('category')
            .exec(function (err,book){
                if(err)
                    return next(err);
                else if(book){
                    var returnBook = book.toJSON();
                    returnBook.links = {};
                    returnBook.links.self = 'http://' + req.headers.host + '/api/books/' + returnBook._id;
                    res.status(200).json(returnBook);
                }
                else
                    res.status(404).json('Book not found');
            });
    };

    var update = function(req,res,next){
        Book.findByIdAndUpdate(req.params.id,req.body,function (err,boo) {
            if(err)
                return next(err);
            res.status(204).json(boo);
        });
    };

    var remove = function(req,res,next){
        Book.findByIdAndRemove(req.params.id,req.body,function (err,boo) {
            if(err)
                return next(err);
            res.status(204).json(boo);
        });
    };

    return{
        create:create,
        getAll:getAll,
        getById:getById,
        update:update,
        remove:remove
    }
};

module.exports = BookController;
