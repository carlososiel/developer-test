var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const dbURI = 'mongodb://127.0.0.1:27017/bookAPI';
mongoose.connect(dbURI, {useMongoClient: true});

var app = express();
var port = process.env.PORT||3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

categoryRouter = require('./Routers/CategoryRouter')();
app.use('/api/categories',categoryRouter);

authorRouter = require('./Routers/AuthorRouter')();
app.use('/api/authors',authorRouter);

bookRouter = require('./Routers/BookRouter')();
app.use('/api/books',bookRouter);

app.use(function(err, req, res, next) {
    res.status(500).send(err);
});

app.get('/', function(req, res){
    res.send('welcome to BOOKs API!');
});

app.listen(port, function(){
    console.log('Running on port: ' + port);
});

