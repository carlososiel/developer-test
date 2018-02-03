const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const authorsDataAccess = require(rootDir + '/server/dataAccess/authorsDataAccess');
const categoriesDataAccess = require(rootDir + '/server/dataAccess/categoriesDataAccess');

const booksDataAccess = {
    create: function (entityObj, cbcreate) {
        try {
            db.Books
            .create(entityObj, (err, book) => cbcreate(err, book));
        } catch (err) {
            cbcreate(err, null);
        }
    },

    get: function(id, cbget){
        try {
            db.Books
            .findOne({_id: id, active: true})
            .populate('category')
            .populate('author')
            .exec((err, book) => cbget(err, book));
        } catch (err) {
            cbget(err, null);
        }
    },

    list: function (cblist) {
        try {
            db.Books
            .find({active: true})
            .populate('category')
            .populate('author')
            .exec((err, books) => cblist(err, books));
        } catch (err) {
            cblist(err, null);
        }
    },

    filter: function(search, categoryKey, authorKey, cbfilter){
        try {
            async.waterfall([
                (cb) => {
                    async.parallel([
                        (cbparallel) => {
                            //search in categories
                            if(!_.isEmpty(categoryKey))
                                categoriesDataAccess.filter(categoryKey, (err, categories) => {
                                    if( !err && !_.isEmpty(categories)) {
                                        let categoriesIds = [];
                                        for (const category of categories) {
                                            categoriesIds.push(category._id);
                                        }
                                        cbparallel(err, categoriesIds);
                                    } else
                                        cbparallel(err, null);
                                });
                            else
                                cbparallel(null, null);
                        },
                        (cbparallel) => {
                            //search in authors
                            if(!_.isEmpty(authorKey))
                                authorsDataAccess.filter(authorKey, (err, authors) => {
                                    if( !err && !_.isEmpty(authors)) {
                                        let authorsIds = [];
                                        for (const author of authors) {
                                            authorsIds.push(author._id);
                                        }
                                        cbparallel(err, authorsIds);
                                    }else
                                        cbparallel(err, null);
                                    
                                });
                            else
                                cbparallel(null, null);
                        },
                    ], (err, result) => {
                        //callback parallel.

                        /*
                        * Call Next waterfall function.
                        */
                        cb(err, result);
                    });
                },
                (result, cb) => {
                    if(!_.isEmpty(search) ||!_.isEmpty(result[0]) || !_.isEmpty(result[1])){
                        let filter = { };

                        if(!_.isEmpty(search)) {
                            try {
                                let id = new mongoose.Types.ObjectId(search);
                                filter = {
                                    active: true,
                                    _id: id
                                };
                            } catch (error) {
                                filter = {
                                    active: true,
                                    $or:[
                                        {title : new RegExp(search)},
                                        {description : new RegExp(search)}
                                    ]
                                };
                            }
                        } else 
                            filter = { active: true };
                        
                        // search in books
                        let query = db.Books
                        .find(filter)
                        .populate('category')
                        .populate('author');

                        if(!_.isEmpty(result[0]))
                            query.where('category').in(result[0]);
                        
                        if(!_.isEmpty(result[1]))
                            query.where('author').in(result[1]);

                        query.exec((err, books) => cb(err, books));
                    }else
                        cb(null, null);
                }
            ], (err, books) => {
                // Callback waterfall
                cbfilter(err, books);
            });
        } catch (err) {
            cbfilter(err, null);
        }
    },

    update: function (id, entityObj, cbupdate){
        try {
            db.Books
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, entityObj ,(err, book) => {
                if(err || !book)
                    cbupdate(err, book);
                else
                    this.get(book._id, cbupdate);
            });
        } catch (err) {
            cbupdate(err, null);
        }
    },

    trash: function(id, cbtrash){
        try {
            db.Books
            .findOneAndUpdate({
                _id: id, 
                active: true
            }, {
                active: false
            },(err, book) => cbtrash(err, book));
        } catch (err) {
            cbtrash(err, null);
        }
    }
};

module.exports = booksDataAccess;