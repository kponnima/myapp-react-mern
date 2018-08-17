var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");

router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password || !req.body.email || !req.body.phone) {
    res.json({success: false, msg: 'Please pass mandatory fields'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.addressstate,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone,
      dob: req.body.dob,
      date_created: req.body.date_created,
      role_id: req.body.role_id,
      privilege_id: req.body.privilege_id,
      status_id: req.body.status_id
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        //console.log(err);
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token, username: req.body.username });
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

/* GET SINGLE USER BY USERNAME */
router.get('/profile/:username', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    User.find(
      { username: req.params.username },
      { password: 0 }
      , function (err, user) {
        if (err) return next(err);
        if (!user) {
          res.status(403).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
          return res.json(user);
        }
      });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;