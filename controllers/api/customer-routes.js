const router = require('express').Router();
const Customer = require('../../models/Customer');
const { Staff, Liked, Comment, Post } = require('../../models');
// const inputCheck = require('../../utils/inputCheck');


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

// create a customer
router.post('/', (req, res) => {
    Customer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        household: req.body.household,
        package: req.body.package,
        date_received: req.body.date_received
    })
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a customer
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
    }
    )
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
