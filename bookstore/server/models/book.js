var mongoose = require('mongoose');

var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = {
    Book
};