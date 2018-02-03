const PATH = '/categories/';
const categoriesDataAccess = require(rootDir + '/server/dataAccess/categoriesDataAccess');
const _ = require('lodash');

const categories = {
    registerRoutes: function (router) {
        router.post(PATH, this.create),
        router.get(PATH, this.list),
        router.get(PATH + ':id', this.get),
        router.put(PATH + ':id', this.update),
        router.delete(PATH + ':id', this.trash)
    },

    create: function (req, res) {
        let body = req.body;
        if(_.isEmpty(body.name) || _.isEmpty(body.description))
            res.status(422).json({message: 'Validation Error'});
        else{
            categoriesDataAccess.create(body, (err, category) => {
                if(err || !category)
                    res.status(500).json({error: err, message: 'Failed to create category in DB'});
                else
                    res.status(201).json({category: category, message: 'Success'});
            });
        }
    },

    get: function(req, res){
        let id = req.params.id;
        categoriesDataAccess.get(id, (err, category) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to get category from DB'});
            else if(!category)
                res.status(404).json({message: 'Category not found in DB'});
            else
                res.status(200).json({category: category, message: 'Success'});
        });
    },

    list: function (req, res) {
        let search = req.query.search;
        let cb = (err, categories) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to list categories from DB'});
            else if(!categories || _.isEmpty(categories))
                res.status(404).json({message: 'Categories not found in DB'});
            else
                res.status(200).json({categories: categories, message: 'Success'});
        };

        if (!_.isEmpty(search)) 
            categoriesDataAccess.filter(search, cb);
        else
            categoriesDataAccess.list(cb);
    },

    update: function (req, res){
        let id = req.params.id;
        let body = req.body;
        categoriesDataAccess.update(id, body, (err, category) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove category from DB'});
            else if(!category)
                res.status(404).json({message: 'Category not found in DB'});
            else
                res.status(200).json({category: category, message: 'Success'});
        });
    },

    trash: function(req, res){
        let id = req.params.id;
        categoriesDataAccess.trash(id, (err, category) => {
            if(err)
                res.status(500).json({error: err, message: 'Failed to remove Category from DB'});
            else if(!category)
                res.status(404).json({message: 'Category not found in DB'});
            else
                res.status(204).json({message: 'Success'});
        });
    }
};

module.exports = categories;