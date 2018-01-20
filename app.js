var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

const dbURI = 'mongodb://127.0.0.1:27017/bookAPI';

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(function () {
    console.log('connection MongoDb successful')

})
  .catch(function (err) {
    console.log(console.error(err
    ))
  });

var app = express();
app.use(logger('dev'));

app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(bodyParser.json());

categoryRouter = require('./server/Routers/CategoryRouter')();
app.use('/api/categories',categoryRouter);

authorRouter = require('./server/Routers/AuthorRouter')();
app.use('/api/authors',authorRouter);

bookRouter = require('./server/Routers/BookRouter')();
app.use('/api/books',bookRouter);
app.use(express.static(path.join(__dirname, 'dist')));
app.use('*', express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 // res.status(500).send(err);
  // render the error page
   res.status(err.status || 500);
   res.send(err);
});

module.exports = app;
