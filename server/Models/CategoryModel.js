var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function Validator(categoryname) {
    if(categoryname===undefined)
        return false;
    return categoryname.length!=0;
}

var CategoryModel = new Schema({
    name : {type:String, unique:true,validate:[Validator, 'Category name is required ']}
});

CategoryModel.post('remove', function(category) {
    this.model('Book').remove({ category: category._id}).exec();
});

module.exports= mongoose.model('Category', CategoryModel);
