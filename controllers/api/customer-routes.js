const router = require('express').Router();
const Customer = require('../../models/Customer');
const { Staff, Like, Comment, Post } = require('../../models');

// get all customers
router.get('/', (req, res) => {
    Customer.findAll({})
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get a single customer
router.get('/:id', (req, res) => {
    Customer.findOne({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'age',
            'household',
            'package',
            'date_received'
        ],
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