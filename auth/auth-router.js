const router = require('express').Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const db = require('../jokes/jokes-model')

router.post('/register', (req, res) => {
  // implement registration
  let newUser = req.body;
  const hashPassword = bcrypt.hashSync(newUser.password, 10)
  newUser.password = hashPassword;

  db.addUser(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(400).json({
        message: 'Couldnt register user' + err.message
      })
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
