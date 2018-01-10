var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
var app = express();
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

//models
var category = require('./api/models/category');
var author = require('./api/models/author');
var book = require('./api/models/book');

//Routers
var categoryRouter = require('./api/routers/category') 
var authorRouter = require('./api/routers/author') 
var bookRouter = require('./api/routers/book') 

//Connect to database
mongoose.connect('mongodb://mongo:27017/library',{
    useMongoClient: true,
});

app.use(cors());



app.use('/api/category', categoryRouter);
app.use('/api/author', authorRouter);
app.use('/api/book', bookRouter);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port);
module.exports = app;
console.log('LIBRARY REST API is runnning on port: '+ port);
