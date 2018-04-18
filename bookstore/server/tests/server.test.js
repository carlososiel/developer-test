const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Author} = require('./../models/author');
const {Category} = require('./../models/category');
const {Book} = require('./../models/book');

let authorId = '';
let categoryId = '';

beforeEach((done) => {
    Book.remove({}).then(() => {
        Author.remove({}).then(() => {
            Category.remove({}).then(() => {
                const author = new Author({firstName: 'Lewis', lastName: 'Carrol'});
                author.save().then((result) => {
                    authorId = result._id;
                    const category = new Category({code: 'Fantasy', description: 'A category for fantasia books'});
                    category.save().then((result) => {
                        categoryId = result._id;
                        done();
                    }, (error) => done(error));

                }, (error) => done(error));
            }, (error) => done(error));
        }, (error) => done(error));
    }, (error) => done(error));


});

describe('POST /books', () => {
    it('should not create a book with invalid body data', () => {
        request(app)
            .post('/books')
            .send({}).expect(400);
    });
    it('should create book', (done) => {

        const book = {
            title: 'Alice in Wonderland',
            description: 'A tale of a girl that fell down a rabbit hole',
            author: authorId,
            category: categoryId
        };

        // done(book);

        request(app)
            .post('/books')
            .send(book).expect(200)
            .expect((response) => {
                expect(response.body.title).toBe(book.title);
            })
            .end((error, response) => {
                if (error) {
                    return done(error);
                }

                Book.find().then((books) => {
                    expect(books.length).toBe(1);
                    expect(books[0].title).toBe(book.title);
                    done();
                }).catch((error) => done(error));
            })
    });
});

describe('GET /books')