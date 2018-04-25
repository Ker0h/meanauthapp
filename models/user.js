const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.findUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.findUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}

//Add user to the database
module.exports.addUser = function(newUser, callback){
    //Encrypt password
    //Generate salt
    bcrypt.genSalt(10, (err, salt) => {
        //Generate hash from salt
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            //Set password equal to hashed value
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}