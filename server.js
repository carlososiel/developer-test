var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

//models
var category = require('./models/category');
var author = require('./models/author');
var book = require('./models/book');

//Routers
var categoryRouter = require('./routers/category') 
var authorRouter = require('./routers/author') 
var bookRouter = require('./routers/book') 

//Connect to database
mongoose.connect('mongodb://mongo:27017/library',{
    useMongoClient: true,
});








app.use(cors());
app.use('/api/category', categoryRouter);
app.use('/api/author', authorRouter);
app.use('/api/book', bookRouter);
app.listen(port);
console.log('LIBRARY REST API is runnning on port: '+ port);
