const mongoose = require('mongoose');


const puchaseSchema = new mongoose.Schema({
   book_id:{ 
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'books'
     },
    user_id:{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'users'
         },
    total_books:{
        type: 'number',
        default: 0
    },
    total_amount:{
        type: 'number',
        default:null
    },
    status:{
        type: 'string',
        default: null
    },
    time:{
        type: 'string',
        default: new Date().toLocaleDateString()
    }
})

const order = new mongoose.model('orders',puchaseSchema);
module.exports = order;