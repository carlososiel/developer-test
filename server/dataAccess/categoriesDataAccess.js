const mongoose = require('mongoose');

const categoriesDataAccess = {
    create: function (entityObj, cbcreate) {
        try {
            db.Categories
            .create(entityObj, (err, category) => cbcreate(err, category));
        } catch (err) {
            cbcreate(err, null);
        }
    },

    get: function(id, cbget){
        try {
            db.Categories
            .findOne({_id: id, active: true})
            .exec((err, category) => cbget(err, category));
        } catch (err) {
            cbget(err, null);
        }
    },

    list: function (cblist) {
        try {
            db.Categories
            .find({active: true})
            .exec((err, categories) => cblist(err, categories));
        } catch (err) {
            cblist(err, null);
        }
    },

    filter: function(categoryKey, cbfilter){
        try {
            let filter = { };
            try {
                let id = new mongoose.Types.ObjectId(categoryKey);
                filter = {
                    active: true,
                    _id: id
                };
            } catch (error) {
                filter = {
                    active: true,
                    $or:[
                        {name : new RegExp(categoryKey)},
                        {description : new RegExp(categoryKey)}
                    ]
                };
            }
            
            db.Categories
            .find(filter)
            .exec((err, categories) => cbfilter(err, categories));
        } catch (err) {
            cbfilter(err, null);
        }
    },

    update: function (id, entityObj, cbupdate){
        try {
            db.Categories
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, entityObj ,(err, category) => {
                if(err || !category)
                    cbupdate(err, category);
                else
                    this.get(category._id, cbupdate);
            });
        } catch (err) {
            cbupdate(err, null);
        }
    },

    trash: function(id, cbtrash){
        try {
            db.Categories
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, {
                active: false
            },(err, category) => cbtrash(err, category));
        } catch (err) {
            cbtrash(err, null);
        }
    }
};

module.exports = categoriesDataAccess;