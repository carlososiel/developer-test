const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
	name: String,
	created_date: { type: Date, default: Date.now },
	updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);
