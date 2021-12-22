const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookTitle:{
        type: 'string',
        default: null
    },
    description:{
        type: 'string',
        default: null
    },
    author:{
        type: 'string',
        default:''
    },
    price:{
        type: 'number',
        default: 0
    }
})


const books = new mongoose.model('books',bookSchema);
module.exports = books;