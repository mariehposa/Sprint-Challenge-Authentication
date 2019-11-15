const db = require('../database/dbConfig')

function getUsers() {
    return db('users')
    .select('username')
}

function getUserId(id) {
    return db('users as u')
    .where('u.id', id)
    .select('u.username')
}

function