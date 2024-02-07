const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
},{timestamps:true});

module.exports = mongoose.model('user', userSchema);