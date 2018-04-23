const mongoose = require('mongoose');
const config = require('../config/database');

//Connect with Mongoose
module.exports = function connect() {
    mongoose.connect(config.database);
    mongoose.connection.on('connected', () => {
        console.log('Connected to the database ' + config.database);
    });

    mongoose.connection.on('error', (err) => {
        console.log('Database error: ' + err);
    });
}
