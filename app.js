const express = require('express');
const app = express();

let port = 8080;

app.listen(process.env.PORT || port)

app.get('/', (req, res) => {
    res.send('Je moeder');
});