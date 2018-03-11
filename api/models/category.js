/**
 * Created by Karina on 12/01/2018.
 */
module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var CategorySchema = new Schema({
        name: {
            type: String,
            require: true
        }
    }, {collection: 'category'});

    return mongoose.model('category', CategorySchema);
};