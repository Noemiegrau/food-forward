const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// if click on / while loggedIn send to welcome page
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('welcome-page')
});

// if click on /welcome-page while loggedIn send to dashboard
router.get('/welcome-page', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  
  res.render('welcome-page')
});

// get login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  
  res.render('login');
});

// // get login page
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/dashboard/' + req.session.staff_id);
//     return;
//   }
  
//   res.render('login');
// });

module.exports = router;