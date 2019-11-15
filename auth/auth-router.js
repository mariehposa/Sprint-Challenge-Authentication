const router = require('express').Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const db = require('../jokes/jokes-model')

router.post('/register', (req, res) => {
  // implement registration
  
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
