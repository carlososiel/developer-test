'use strict';


const Hapi = require('hapi');
const mongoose = require('mongoose');

const Routes =  require('./src/routes');
const MongoDBUrl = 'mongodb://localhost:27017/bookdb';

const server = new Hapi.Server({
	port: 3000,
	host: '0.0.0.0',
	routes: { 
		cors: true 
	}
});

server.route(Routes);

(async () => {
	try {  
		await server.start();
	
		mongoose.connect(
			MongoDBUrl, 
			{}
		).then(() => { 
			console.log(`Connected to Mongo server`) 
		}, err => { 
			console.log(err) 
		});
		console.log(`Server running at: ${server.info.uri}`);
	}
	catch (err) {  
		console.log(err)
	}
})();