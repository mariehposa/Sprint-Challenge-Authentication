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
  let { username, password } = req.body;
  
  db.getUsersBy({username})
    .then(users => {
      if(users && bcrypt.compareSync(password, users.password)) {
        const token = generateToken(users)
        res.status(200).json({
          message: `You are logged in ${users.username}`,
          token: token
        })
      } else {
        res.status(400).json({
          message: 'Invalid Credentials'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error logging user in ' + err.message
      })
    })
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    password: user.password
  }

  const options = {
    expiresIn: '1 day'
  }

  const result = {
    payload,
    process.env.SECRET,
    options
  }

  return result;
}

module.exports = router;
