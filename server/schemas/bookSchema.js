
module.exports = function (mongoose) {
    const Schema = mongoose.Schema;
    const bookSchema = new Schema({
            title: {type: String, required: true},
            description: {type: String, required: true},
            price: {type: Number, required: true},
            category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
            author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
            active: {type: Boolean, required: true, default: true}
        }, {versionKey: false}
    );
    return mongoose.model('Book', bookSchema);
};