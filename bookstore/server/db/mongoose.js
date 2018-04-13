const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/';
const dbName = 'Bookstore';

mongoose.connect(url + dbName);

module.exports = { mongoose };