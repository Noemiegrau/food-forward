const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Like } = require('../models');

// get login page
router.get('/', (req, res) => {
  res.render('login')
});

module.exports = router;