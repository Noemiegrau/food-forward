const router = require('express').Router();
const { Post, Staff, Comment, Customer, Like } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    res.render('dashboard')
});

module.exports = router;