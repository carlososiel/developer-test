var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = {
    Book
};