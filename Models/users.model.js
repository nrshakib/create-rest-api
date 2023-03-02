const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id: uuidv4(),
        username: "NRS",
        email: 'nrs@gmail.com',
    },
    {
        id: uuidv4(),
        username: "Shakib",
        email: 'shakib@gmail.com',
    },
    {
        id: uuidv4(),
        username: "Nadim",
        email: 'nadim@gmail.com',
    },
    {
        id: uuidv4(),
        username: "Rijvi",
        email: 'rijvi@gmail.com',
    }
];

module.exports = users;