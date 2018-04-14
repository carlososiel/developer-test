var mongoose = require('mongoose');

var CategorySchema = new CategorySchema({
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

var Category = mongoose.model('Category', CategorySchema);

module.exports = {
    Category
};