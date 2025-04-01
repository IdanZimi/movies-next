const express = require('express');
const logger = require('morgan');
const movies = require('./movies.json');

const app = express();
app.use(logger('dev'));

// Middleware to add CORS header to all responses
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.get('/movies/:id', (req, res) => {
    res.send(movies.filter(movie => movie.id === req.params.id));
});

app.listen(3000, function () {
    console.log(`app listening on port ${3000}!`);
});

module.exports = app;
