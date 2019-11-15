const db = require('../database/dbConfig')

// function getUsers() {
//     return db('users')
//     .select('username')
// }

function getUserId(id) {
    return db('users as u')
    .where('u.id', id)
    .select('u.username')
    .first()
}

function getUserBy(value) {
    return db('users as u')
    .where(value)
    .first()
}

function addUser(user) {
    return db('users as u')
    .insert(user)
    .then(([id]) => this.getUserId(id))
}

module.exports = {
    // getUsers,
    getUserId,
    getUserBy,
    addUser
}