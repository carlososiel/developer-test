/**
 * Created by Karina on 12/01/2018.
 */
module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var AuthorSchema = new Schema({
        name: {
            type: String,
            require: true
        }
    }, {collection: 'author'});

    return mongoose.model('author', AuthorSchema);
};