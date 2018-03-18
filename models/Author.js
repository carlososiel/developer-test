const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	created_date: { type: Date, default: Date.now },
	updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Author', AuthorSchema);
