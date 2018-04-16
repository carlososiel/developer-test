const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../db/mongoose');
const {
    Book
} = require('./../models/book');

Book.findByIdAndRemove('5acfe7da12ea4f2b8469a865').then((result) => {
    console.log(result)
}, (error) => {
    console.log(error)
});