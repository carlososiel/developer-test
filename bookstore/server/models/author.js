var mongoose = require('mongoose');

var Author = mongoose.model('Author', {
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

module.exports = { Author };