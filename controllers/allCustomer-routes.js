const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get login page
router.get('/', (req, res) => {
  res.render('allCustomer')
});

module.exports = router;