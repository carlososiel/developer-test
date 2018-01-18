var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Author = mongoose.model('Author');
var Category = mongoose.model('Category');

var BookModel = new Schema({
    title:{type:String, unique:true},
    description : {type:String},
    published_year : {type:String,match:/^\d{4}$/ },
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
    category : {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
});

module.exports= mongoose.model('Book', BookModel);
