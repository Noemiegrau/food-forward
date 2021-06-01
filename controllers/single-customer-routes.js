const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get single-customer information
// router.get('/', (req, res) => {
//   res.render('single-customer')
// });

router.get('/:id', (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'first_name',
      'last_name',
      'age',
      'household',
      'package',
      'date_received'
    ]
  })
    .then(dbCustomerData => {
      if (!dbCustomerData) {
        res.status(404).json({ message: 'No customer found with this id' });
        return;
      }

      // serialize the data
      const customer = dbCustomerData.get({ plain: true });

      // pass data to template
      res.render('single-customer', { 
        customer
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit a customer
router.put('/:id', (req, res) => {
  Customer.update(
  {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      household: req.body.household,
      package: req.body.package,
      date_received: req.body.date_received
  },
  {
      where: {
          id: req.params.id
      }
  })
  .then(dbCustomerData => {
      if (!dbCustomerData) {
        res.status(404).json({ message: 'No customer found with this id' });
        return;
      }
      res.json(dbCustomerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a customer
router.delete('/:id', (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCustomerData => {
        if (!dbCustomerData) {
          res.status(404).json({ message: 'No customer found with this id' });
          return;
        }
        res.json(dbCustomerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;