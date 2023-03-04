const users = require("../Models/users.model");
const { v4: uuidv4 } = require("uuid");

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
  };
  users.push(newUser);
  res.status(201).send(users);
};

//update users
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).send(users);
};

//delete users
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id != userId);
  res.status(200).send(users);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
