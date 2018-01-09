var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');

//models
var category = require('./models/category');
var author = require('./models/author');
var book = require('./models/book');
//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

var categoryRouter = require('./routers/category') 

//Connect to database
mongoose.connect('mongodb://mongo:27017/library',{
    useMongoClient: true,
});








app.use(cors());
app.use('/api/category', categoryRouter);
app.listen(port);
console.log('LIBRARY REST API is runnning on port: '+ port);
