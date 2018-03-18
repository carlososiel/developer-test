#!/usr/bin/env node

/**
 * Module dependencies
 */
const app = require('../app');
const debug = require('debug')('mean-app:server');
const http = require('http');

/**
 * Get port from environment and store in Express
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create the Http Server
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for the Http Server 'error' event
 */
function onError(error) {
	if (error.syscall !== 'listen') throw error;
	const bind = (typeof port === 'string' ? 'Pipe ' : 'Port ') + port;
	// handle specific listen errors with friendly messages
	handleError(error);
}

// handle specific listen errors with friendly messages
function handleError(error) {
	switch (error.code) {
		case 'EACCES':
			console.error(`${error} requires elevated privilages.`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`${error} is already in use.`);
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for the Http Server 'listening' event
 */
function onListening() {
	const address = server.address();
	const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
	debug(`Listening on ${bind}`);
}
