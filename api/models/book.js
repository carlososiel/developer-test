var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookSchema   = new Schema({    
    name: String,
    author: {type: Schema.Types.ObjectId, ref: 'Author'},     
    category: {type: Schema.Types.ObjectId, ref: 'Category'},     
});
module.exports = mongoose.model('Book', BookSchema);