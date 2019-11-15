const db = require('../database/dbConfig')

function getUsers() {
    return db()
}