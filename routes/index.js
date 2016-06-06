var express = require('express');
var router = express.Router();
var passport = require('passport');

var userService = require('../services/user-service');


/* GET index page. ===========================*/
router.get('/', function(req, res, next) {
  if (req.user){
    return res.redirect('/home');
  }
  var vmd = {
    title: 'Resma | manager',
    showLogin: true,
    showGetstart: true
  };
  res.render('index', vmd);
});


/* GET login page. ===========================*/
router.get('/login', function(req, res, next){
  var error = req.flash('error');
  var vmd = {
    title: 'Resma|login',
    error: error
  };
  res.render('user/login', vmd);
});


/* GET signin page. ===========================*/
router.get('/signin', function(req, res, next){
  var vmd = {
    title: 'Resma|signin',
    showLogin: true
  };
  res.render('user/signin',vmd);
});


/* POST signin. ===========================*/
router.post('/signin', function(req, res, next){
  userService.addUser(req.body, function (err) {
    if (err){
      var vmd = {
        title: 'Resma|signin',
        input: req.body,
        showLogin: true,
        error: err
      };
      //delete req.input.password;
      return res.render('user/signin', vmd);
    }
    req.login(req.body, function (err) {
      var vmd = {
        title: 'Resma | home',
        isInside: true
      };
      res.redirect('/home', vmd);
    });
  });
});


/* POST login ===========================*/
router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: 'Invalid Credentials'
}));


/* GET logout. ===========================*/
router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
