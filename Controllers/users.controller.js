const users = require("../Models/users.model");
const { v4: uuidv4 } = require('uuid');

//get users
const getUsers = (req, res) => {
    res.status(200).send(users);
};

//create users
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    }
    users.push(newUser);
    res.status(200).send(users);
};

module.exports = { getUsers, createUser };