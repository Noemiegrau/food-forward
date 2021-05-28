const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get all customers
router.get('/', (req, res) => {
  Customer.findAll({
    attributes: [
      'id',
      'first_name',
      'last_name'
    ]
  })

    .then(dbCustomerData => {
      const customers = dbCustomerData.map(customer => customer.get({ plain: true }));

      res.render('allCustomer', { 
        customers
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;