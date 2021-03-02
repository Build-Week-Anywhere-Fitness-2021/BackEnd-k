const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Users = require('../users/users-model');

const {isValid} = require('../users/users-service');
const {jwtSecret} = require('../config/secret');


router.post('/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hashing the password here
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    // saving the user to the database
    Users.addUser(credentials)
      .then(user => {
        res.status(201).json({user, message: 'registration success'});
      })
      .catch(error => {
        res.status(500).json({message: 'is this the correct error' + error.message });
      });
  } else {
    res.status(400).json({
      message: 'please provide username and password'
    });
  }
});

router.post('/login', (req, res) => {
  //headers 
  // const headers = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers":
  //     "Origin, X-Requested-With, Content-Type, Accept",
  // }; 
  // res.set(headers);
  const {username, password} = req.body;
 
  if (isValid(req.body)) { 
    Users.findBy({username: username}) 
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user);

          res.status(200).json({
            message: `Hello ${user.username}, You are logged in!`, 
            authToken: token
          });
        }else {
          res.status(401).json({error: 'invalid username and/or password'});
        } 
      })
      .catch(err => {
        res.status(500).json({message: 'Error loggin in', error: err.message});
      });
  }else{
      res.status(400).json({
      message:'please provide a username and password'
  });
  }
});



function makeToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    role: user.role
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;