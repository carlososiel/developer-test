var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @return {boolean}
 */
function Validator(firstname) {
    if(firstname===undefined)
        return false;
    return firstname.length!=0;
}

var AuthorModel = new Schema({
    first_name : {type:String, require:true,validate:[Validator, 'First name is required ']},
    last_name: {type:String,require:true,validate:[Validator, 'Last name is required ']}
});

AuthorModel.post('remove', function(author) {
    this.model('Book').remove({ author: author._id }).exec();
});

module.exports= mongoose.model('Author', AuthorModel);
