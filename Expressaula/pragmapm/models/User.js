const mongoose = require('mongoose');
const Schema = mongoose.Schema

var passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    id: {
        type: Number,
        autoIncrement: true,
        allowNull: false,
        primarykey: true 
    },
    name: {
        type: String,
        allowNull: false
    },
    email: {
        type: String,
        allowNull: false,
        unique: true
    },
    password: {
        type: String,
        allowNull: false
    },
    admin: {
        type: Boolean,
        default: false
    }
});

mongoose.model('User', User);
module.exports = User;