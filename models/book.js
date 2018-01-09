var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var AuthorSchema = require('author.js')
var CategorySchema = require('category.js')

var BookSchema   = new Schema({    
    name: String,
    author: AuthorSchema,     
    category: CategorySchema,     
});
module.exports = mongoose.model('Book', BookSchema);