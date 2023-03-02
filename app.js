const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./Models/users.model');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//wrong route
app.use((req, res, next) => {
    res.status(404).send("Route Not Found");
    next();
});

//server error
app.use((err, req, res, next) => {
    res.status(500).send("Server Error");
    next();
});

module.exports = app;