const PATH = '/authors/';
const authorsDataAccess = require(rootDir + '/server/dataAccess/authorsDataAccess');
const _ = require('lodash');

const authors = {
    registerRoutes: function (router) {
        router.post(PATH, this.create),
        router.get(PATH, this.list),
        router.get(PATH + ':id', this.get),
        router.put(PATH + ':id', this.update),
        router.delete(PATH + ':id', this.trash)
    },
    
    create: function (req, res) {
        let body = req.body;
        if(_.isEmpty(body.name) || _.isEmpty(body.lastName))
            res.status(422).json({message: 'Validation Error'});
        else{
            authorsDataAccess.create(body, (err, author) => {
                if(err || !author)
                    res.status(500).json({error: err, message: 'Failed to create author in DB'});
                else
                    res.status(201).json({author: author, message: 'Success'});
            });
        }
    },

    get: function(req, res){
        let id = req.params.id;
        authorsDataAccess.get(id, (err, author) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to get author from DB'});
            else if(!author)
                res.status(404).json({message: 'Author not found in DB'});
            else
                res.status(200).json({author: author, message: 'Success'});
        });
    },

    list: function (req, res) {
        let search = req.query.search;
        let cb = (err, authors) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to list authors from DB'});
            else if(!authors || _.isEmpty(authors))
                res.status(404).json({message: 'Authors not found in DB'});
            else
                res.status(200).json({authors: authors, message: 'Success'});
        };
        
        if (!_.isEmpty(search)) 
            authorsDataAccess.filter(search, cb);
        else
            authorsDataAccess.list(cb);
    },

    update: function (req, res){
        let id = req.params.id;
        let body = req.body;
        authorsDataAccess.update(id, body, (err, author) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove author from DB'});
            else if(!author)
                res.status(404).json({message: 'Author not found in DB'});
            else
                res.status(200).json({author: author, message: 'Success'});
        });
    },

    trash: function(req, res){
        let id = req.params.id;
        authorsDataAccess.trash(id, (err, author) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove author from DB'});
            else if(!author)
                res.status(404).json({message: 'Author not found in DB'});
            else
                res.status(204).json({message: 'Success'});
        });
    }
};

module.exports = authors;