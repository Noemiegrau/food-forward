const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get login page
router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  
  res.render('login');
});

module.exports = router;