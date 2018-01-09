var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var AuthorSchema   = new Schema({    
    first_name: String, 
    last_name: String,    
});
module.exports = mongoose.model('Author', AuthorSchema);