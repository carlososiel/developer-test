var express = require('express');
var cors = require('cors')
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
/*
 * Use cross domain
 */
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/book', require('./routes/book'));
app.use('/author', require('./routes/author'));
app.use('/category', require('./routes/category'));
/*
 * Set database connection
 */
if (!global.hasOwnProperty('db')) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1/developer-test', {
        useMongoClient: true
    });
    global.db = {
        mongoose: mongoose,
        Book: require('./models/book')(mongoose),
        Author: require('./models/author')(mongoose),
        Category: require('./models/category')(mongoose),
    };
}

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
server.listen(3000);

/**
 * Listen on provided port, on all network interfaces.
 */

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}