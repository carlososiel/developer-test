
module.exports = function (mongoose) {
    const Schema = mongoose.Schema;
    const authorSchema = new Schema({
            name: {type: String, required: true},
            lastName: {type: String, required: true},
            active: {type: Boolean, required: true, default: true}
        }, {versionKey: false}
    );
    return mongoose.model('Author', authorSchema);
};