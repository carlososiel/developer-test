
module.exports = function (mongoose) {
    const Schema = mongoose.Schema;
    const categorySchema = new Schema({
            name: {type: String, required: true},
            description: {type: String, required: true},
            active: {type: Boolean, required: true, default: true}
        }, {versionKey: false}
    );
    return mongoose.model('Category', categorySchema);
};