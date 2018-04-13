var mongoose = require('mongoose');

var Category = mongoose.model('Category', {
    code: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = { Category };