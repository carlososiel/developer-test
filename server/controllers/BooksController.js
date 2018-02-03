const PATH = '/books/';
const booksDataAccess = require(rootDir + '/server/dataAccess/booksDataAccess');
const _ = require('lodash');

const books = {
    registerRoutes: function (router) {
        router.post(PATH, this.create),
        router.get(PATH, this.list),
        router.get(PATH + ':id', this.get),
        router.put(PATH + ':id', this.update),
        router.delete(PATH + ':id', this.trash)
    },

    create: function (req, res) {
        let body = req.body;
        if(_.isEmpty(body.title) || _.isEmpty(body.description) || _.isNaN(body.price) || 
            _.isEmpty(body.category) || _.isEmpty(body.author))
            res.status(422).json({message: 'Validation Error'});
        else{
            booksDataAccess.create(body, (err, book) => {
                if(err || !book)
                    res.status(500).json({error: err, message: 'Failed to create book in DB'});
                else
                    res.status(201).json({book: book, message: 'Success'});
            });
        }
    },

    get: function(req, res){
        let id = req.params.id;
        booksDataAccess.get(id, (err, book) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to get book from DB'});
            else if(!book)
                res.status(404).json({message: 'Book not found in DB'});
            else
                res.status(200).json({book: book, message: 'Success'});
        });
    },

    list: function (req, res) {
        let search = req.query.search;
        let category = req.query.category;
        let author = req.query.author;
        let cb = (err, books) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to list books from DB'});
            else if(!books || _.isEmpty(books))
                res.status(404).json({message: 'Books not found in DB'});
            else
                res.status(200).json({books: books, message: 'Success'});
        };

        if (!_.isEmpty(search) || !_.isEmpty(category) || !_.isEmpty(author))
            booksDataAccess.filter(search, category, author, cb);
        else
            booksDataAccess.list(cb);
    },

    update: function (req, res){
        let id = req.params.id;
        let body = req.body;
        booksDataAccess.update(id, body, (err, book) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove book from DB'});
            else if(!book)
                res.status(404).json({message: 'Book not found in DB'});
            else
                res.status(200).json({book: book, message: 'Success'});
        });
    },

    trash: function(req, res){
        let id = req.params.id;
        booksDataAccess.trash(id, (err, book) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove book from DB'});
            else if(!book)
                res.status(404).json({message: 'Book not found in DB'});
            else
                res.status(204).json({message: 'Success'});
        });
    }
};

module.exports = books;