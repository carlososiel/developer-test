
const express = require('express');
const router = express.Router();

/*
 * Load all api Controllers.
 */
require(rootDir + '/server/controllers/BooksController').registerRoutes(router);
require(rootDir + '/server/controllers/CategoriesController').registerRoutes(router);
require(rootDir + '/server/controllers/AuthorsController').registerRoutes(router);

router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;