/**
 * Created by Karina on 11/01/2018.
 */
this.index = function (req, res) {
    const {ObjectId} = require('mongodb');
    let filter = {};
    if(req.query.category && ObjectId.isValid(req.query.category))
        filter["category._id"] = new ObjectId(req.query.category);
    if(req.query.author && ObjectId.isValid(req.query.author))
        filter["author._id"] = new ObjectId(req.query.author);
    db.Book.find(filter, function (error, books) {
        if (error)
            return res.send([]);
        res.send(books);
    });
};
this.destroy = function (req, res) {
    db.Book.remove({_id: req.params.id}, function (err) {
        if (err)
            return res.json({success: false});
        return res.json({success: true});
    });
};
this.store = function (req, res) {
    db.Author.findById(req.body.author, function (error, author) {
        db.Category.findById(req.body.category, function (error, category) {
            let book = new db.Book({
                name: req.body.name,
                author: author,
                category: category
            });
            book.save(function (error) {
                if (error)
                    return res.json({success: false});
                return res.json({success: true});
            });
        });
    });
};
this.edit = function (req, res) {
    db.Book.findById(req.params.id, function (error, book) {
        if (error)
            return res.json({});
        return res.json({
            _id: book._id,
            name: book.name,
            author: book.author._id,
            category: book.category._id
        });
    });
};
this.update = function (req, res) {
    db.Author.findById(req.body.author, function (error, author) {
        db.Category.findById(req.body.category, function (error, category) {
            db.Book.findById(req.body._id, function (error, book) {
                if (error)
                    return res.json({success: false});
                book.name = req.body.name;
                book.author = author;
                book.category = category;
                book.save(function (error) {
                    if (error)
                        return res.json({success: false});
                    return res.json({success: true});
                });
            });
        });
    });
};