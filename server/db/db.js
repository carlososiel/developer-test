const config = require(rootDir + '/server/config/db');
const mongoose = require('mongoose');
const mongoseDB = mongoose.connection;

mongoseDB.on('connecting', function () {
    console.log('connecting to MongoDB...');
});
mongoseDB.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});
mongoseDB.on('connected', function () {
    console.log('MongoDB connected!');
});
mongoseDB.once('open', function () {
    console.log('MongoDB connection opened!');
});
mongoseDB.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
mongoseDB.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    mongoose.connect(config.mongoUrl, {server: config.mongoseServer});
});

mongoose.connect(config.mongoUrl, {server: config.mongoseServer});


global.db = {
    Books: require(rootDir + '/server/schemas/bookSchema')(mongoose),
    Categories: require(rootDir + '/server/schemas/categorySchema')(mongoose),
    Authors: require(rootDir + '/server/schemas/authorSchema')(mongoose)
};