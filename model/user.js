const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    Name:{
        type: 'string',
        required: true,
    },
    phone:{
        type: 'string',
        required: true,
    },
    otp:{
        type: 'number',
        default: 0
    },
    token:{
        type: 'string',
        default:''
    }
})

const users = new mongoose.model('users',UserSchema);
module.exports = users;