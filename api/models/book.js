/**
 * Created by Karina on 12/01/2018.
 */
module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var BookSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        author: {
            type: Object,
            require: true
        },
        category: {
            type: Object,
            require: true
        }
    }, {collection: 'user'});

    return mongoose.model('book', BookSchema);
};