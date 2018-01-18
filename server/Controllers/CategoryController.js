var Category = require('../Models/CategoryModel');
var CategoryController = function(){

    var create = function(req, res, next){
        Category.create(req.body,function (err,cat) {
            if(err)
                return next(err);
            res.status(201).json(cat);
        });
    };

    var getAll = function (req,res, next) {
        Category.find(function (err, cat) {
            if(err)
                return next(err);
            else{
                var returnCategories = [];
                cat.forEach(function(element, index, array){
                    var newCategory = element.toJSON();
                    newCategory.links= {};
                    newCategory.links.self = 'http://' + req.headers.host + '/api/books/?category=' + newCategory._id;
                    returnCategories.push(newCategory);
                });
                res.status(200).json(returnCategories);
            }
        })
    };

    var getById = function (req,res, next) {
        Category.findById(req.params.id, function(err,category){
            if(err)
                return next(err);
            else if(category){
                var returnCategory = category.toJSON();
                returnCategory.links = {};
                returnCategory.links.self = 'http://' + req.headers.host + '/api/books/?category=' + returnCategory._id;
                res.status(200).json(returnCategory);
            }
            else
                res.status(404).send('Category not found');
        });
    };

    var update = function(req,res,next){
        Category.findByIdAndUpdate(req.params.id,req.body,function (err,cat) {
            if(err)
                return next(err);
            res.status(204).json(cat);
        });
    };

    var remove = function(req,res,next){

        Category.findOne({_id:req.params.id},function (err,cat) {
            if(err)
                return next(err);
            else {
                cat.remove();
                res.status(204).json(cat);
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

module.exports = CategoryController;