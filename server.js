const express = require('express');
const users = require('./users.json');
const app = express();

const returnUsers = (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const filteredUsers = users.filter(u => u.id >= page);

    res.send(filteredUsers.slice(0, limit));
}

const returnUserId = (req, res) => {
    const userId = parseInt(req.params.userId)
    res.send(users.find(u => u.id === userId))
}

app.get('/users', returnUsers);
app.get('/users/:userId', returnUserId);

const port = 3001;
app.listen(port, () => console.log("Server is up and running"))