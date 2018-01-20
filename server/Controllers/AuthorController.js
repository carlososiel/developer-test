var Author = require('../Models/AuthorModel');
var AuthorController = function () {

    var create = function (req, res, next) {
        Author.create(req.body,function (err,aut) {
            if(err)
                return next(err);
            res.status(201).json(aut);
        });
    };

    var getAll = function (req,res, next) {
        Author.find(function (err, aut) {
            if(err)
                return next(err);
            else{
                var returnauts = [];
                aut.forEach(function(element, index, array){
                    var newAuthor = element.toJSON();
                    newAuthor.links= {};
                    newAuthor.links.self = 'http://' + req.headers.host + '/api/books/?author=' + newAuthor._id;
                    returnauts.push(newAuthor);
                });
                res.status(200).json(returnauts);
            }
        })
    };

    var getById = function (req,res, next) {
        Author.findById(req.params.id, function(err,aut){
            if(err)
                return next(err);
            else if(aut){
                var returnAuthor = aut.toJSON();
                returnAuthor.links = {};
                returnAuthor.links.self = 'http://' + req.headers.host + '/api/books/?author=' + returnAuthor._id;
                res.status(200).json(returnAuthor);
            }
            else
                res.status(404).json('Author not found');
        });
    };

    var update = function(req,res,next){
        Author.findByIdAndUpdate(req.params.id,req.body,function (err,aut) {
            if(err)
                return next(err);
            res.status(204).json(aut);
        });
    };

    var remove = function(req,res,next){
        Author.findOne({_id:req.params.id},function (err,aut) {
            if(err)
                return next(err);
            else {
                aut.remove();
                res.status(204).json(aut);
            }
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

module.exports = AuthorController;