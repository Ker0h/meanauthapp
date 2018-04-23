const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const database_connection = require('./modules/database_connection');
const app = express();

//Router files
const users = require('./routes/users');

//Local port
let port = (process.env.PORT || 8080);

//CORS Middleware
app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser Middelware
app.use(bodyParser.json());

//Routing

//User routes
app.use('/users', users);

//Initiate database connection
database_connection();

//Index
app.get('/', (req, res) => {
    res.send('Je moeder');
});

//Listening to specified port
app.listen(port, () => {
    console.log('Listening on port ' + port);
});