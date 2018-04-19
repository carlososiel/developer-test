# BookstoreServer

This project was written using NodeJS and it creates a REST API for handling MongoDB resources regarding Books, Authors and Categories.  
Production dependencies are:  
* `lodash` for access to common JavaScript functionalities.
* `express` for the creation and publishing of API routes.  
* `cors` and `body-parser` to use as middlewares for the `express` library.  
* `mongodb` and `mongoose` to access MongoDB resources.  

Development dependencies are:  
 * `expect` to perform assertions in test cases.
 * `mocha` to run test suites.  
 * `supertest` to perform requests to routes created with `express`.

## Development server

Run `node server.js` from root directory for a server to start on `http://localhost:300/`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io). The test suites contained in this project, test all API routes for managing Books.
