var mongoose = require('mongoose');

var AuthorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    }
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = {
    Author
};