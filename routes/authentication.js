const express = require('express');
const router = express.Router();

const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const passportService = require('../passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


router.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there'})
  })
router.post('/signin', requireSignin, () => signin());
router.post('/signup', (req, res, next) => {
  let { email, password } = req.body.params;
  if (!email || !password ) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      return res.status(422) .send({ error: 'Email is in use'});
    }
    const user = new User({
      email,
      password
    });
    user.save( (err) => {
      if (err) { return next(err); }
      res.json( { token: tokenForUser(user) } );
    });
  });
});



tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode( { sub: user.id, iat: timestamp }, config.secret );
}

signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
}

signup = (req, res, next) => {
  let { email, password } = req.body;
  console.log(req.body)
  if (!email || !password ) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      return res.status(422) .send({ error: 'Email is in use'});
    }
    const user = new User({
      email,
      password
    });
    user.save( (err) => {
      if (err) { return next(err); }
      res.json( { token: tokenForUser(user) } );
    });
  });
}

module.exports = router;
