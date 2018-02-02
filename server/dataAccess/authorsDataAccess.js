const mongoose = require('mongoose');

const authorsDataAccess = {
    create: function (entityObj, cbcreate) {
        try {
            db.Authors
            .create(entityObj, (err, author) => cbcreate(err, author));
        } catch (err) {
            cbcreate(err, null);
        }
    },

    get: function(id, cbget){
        try {
            db.Authors
            .findOne({_id: id, active: true})
            .exec((err, author) => cbget(err, author));
        } catch (err) {
            cbget(err, null);
        }
    },

    list: function (cblist) {
        try {
            db.Authors
            .find({active: true})
            .exec((err, authors) => cblist(err, authors));
        } catch (err) {
            cblist(err, null);
        }
    },

    filter: function(authorKey, cbfilter){
        try {
            let filter = { };
            try {
                let id = new mongoose.Types.ObjectId(authorKey);
                filter = {
                    active: true,
                    _id: id
                };
            } catch (error) {
                filter = {
                    active: true,
                    $or:[
                        {name : new RegExp(authorKey)},
                        {lastName : new RegExp(authorKey)}
                    ]
                };
            }

            db.Authors
            .find(filter)
            .exec((err, authors) => cbfilter(err, authors));
        } catch (err) {
            cbfilter(err, null);
        }
    },

    update: function (id, entityObj, cbupdate){
        try {
            db.Authors
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, entityObj ,(err, author) => {
                if(err || !author)
                    cbupdate(err, author);
                else
                    this.get(author._id, cbupdate);
            });
        } catch (err) {
            cbupdate(err, null);
        }
    },

    trash: function(id, cbtrash){
        try {
            db.Authors
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, {
                active: false
            },(err, author) => cbtrash(err, author));
        } catch (err) {
            cbtrash(err, null);
        }
    }
};

module.exports = authorsDataAccess;