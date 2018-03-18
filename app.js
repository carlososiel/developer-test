const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

const book = require('./routes/book'),
	category = require('./routes/category'),
	author = require('./routes/author');

const app = express();

// create a connection to database
mongoose.Promise = global.Promise;
mongoose
	.connect('mongodb://127.0.0.1:27017/library')
	.then(() => console.info('Connection successful.'))
	.catch((err) => console.error(err));

// setting up the middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the applciation public folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/categories', express.static(path.join(__dirname, 'dist')));
app.use('/authors', express.static(path.join(__dirname, 'dist')));

app.use('/book', book);
app.use('/category', category);
app.use('/author', author);

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
	res.status(404).json(err);
});

// error handler
app.use((err, req, res, next) => {
	// provide error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
