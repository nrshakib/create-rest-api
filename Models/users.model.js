const { v4: uuidv4 } = require("uuid");
let users = [
  {
    id: uuidv4(),
    username: "Nadim",
    email: "nadim@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Rijvi",
    email: "rijvi@gmail.com",
  },
];

module.exports = users;
