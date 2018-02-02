global.rootDir = __dirname;

const config = require(rootDir + '/server/config/server');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'dist')));

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('*', 'http://127.0.0.1:3000' );
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Cache-Control', 'no-cache');
  if ('OPTIONS' == req.method) return res.sendStatus(200);
  next();
})

// Configure access to DB.
require(rootDir + '/server/db/db');
// Routes to API
const api = require('./server/routes/api');

app.use(config.apiPrefix, api);

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'dist/index.html'));
});

const port = process.env.PORT || config.port;
app.set('port', port);

const server = app.listen(app.get('port'), () => console.log(`API is running...`));