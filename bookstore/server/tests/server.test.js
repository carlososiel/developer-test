const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Author} = require('./../models/author');
const {Category} = require('./../models/category');
const {Book} = require('./../models/book');

let authorId = '';
let categoryId = '';
let bookId = new ObjectID();

/**
 * BEFORE EACH TEST OPERATIONS
 */
beforeEach((done) => {
    Category.remove({}).then(() => {
        done();
    });
});

beforeEach((done) => {
    const category = new Category({code: 'Horror', description: 'A category for horror books'});
    category.save().then((result) => {
        categoryId = result._id;
        done();
    });
});

beforeEach((done) => {
    Author.remove({}).then(() => {
        done();
    });
});

beforeEach((done) => {
    const author = new Author({firstName: 'Lewis', lastName: 'Carroll'});
    author.save().then((result) => {
        authorId = result._id;
        done();
    });
});

beforeEach((done) => {
    Book.remove({}).then(() => {
        done();
    });
});

beforeEach((done) => {
    const book = new Book({
        title: 'Murder in the Orient Express',
        description: 'A mystery book',
        author: authorId,
        category: categoryId
    });
    book.save().then((result) => {
        bookId = result._id
        done();
    });
});

describe('POST /books', () => {

    it('should not create a book with empty body data', (done) => {
        request(app)
            .post('/books')
            .send({})
            .expect(400)
            .end((error, response) => {
                if (error) {
                    return done(error);
                }
                done();
            });
    });

    it('should create book', (done) => {

        const book = {
            title: 'Alice in Wonderland',
            description: 'A tale of a girl that fell down a rabbit hole',
            author: authorId,
            category: categoryId,
        };

        request(app)
            .post('/books')
            .send(book)
            .expect(200)
            .expect((response) => {
                expect(response.body.title).toBe(book.title);
            })
            .end((error, response) => {
                if (error) {
                    return done(error);
                }

                Book.find().then((books) => {
                    expect(books.length).toBe(2);
                    expect(books[1].title).toBe(book.title);
                    done();
                }).catch((error) => done(error));
            })
    });
});

describe('GET /books', () => {
    it('should get all books', (done) => {
        request(app)
            .get('/books')
            .expect(200)
            .expect(
                (response) => {
                    expect(response.body.result.length)
                        .toBe(1)
                }
            )
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});

describe('GET /books/:id', () => {

    it('should get a book doc', (done) => {
        request(app)
            .get(`/books/${bookId.toHexString()}`)
            .expect(200)
            .expect(
                (response) => {
                    expect(response.body.result.title).toBe('Murder in the Orient Express');
                })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should return a 404 if book not found', (done) => {
        const id = new ObjectID();
        request(app)
            .get(`/books/${id.toHexString()}`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should return a 400 if non-valid id', (done) => {
        const id = 'somethingNotAnId';
        request(app)
            .get(`/books/${id}`)
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});

describe('DELETE /books/:id', () => {

    it('should remove a book', (done) => {
        request(app)
            .delete(`/books/${bookId.toHexString()}`)
            .expect(200)
            .expect((response) => {
                expect(response.body.result._id).toBe(bookId.toHexString());
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should return 404 if id not found', (done) => {
        const id = new ObjectID().toHexString();

        request(app)
            .delete(`/books/${id}`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });

    });

    it('should return a 400 if non-valid id', (done) => {
        const id = 'somethingNotAnId';
        request(app)
            .delete(`/books/${id}`)
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

});

describe('PATCH /books/:id', () => {

    it('should update the book', (done) => {

        request(app)
            .patch(`/books/${bookId.toHexString()}`)
            .send({description: 'Some other description'})
            .expect(200)
            .expect((response) => {
                expect(response.body.result.description).toBe('Some other description');
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

});