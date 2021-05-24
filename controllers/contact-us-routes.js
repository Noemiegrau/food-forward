const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    res.render('contact-us')
});

  module.exports = router;