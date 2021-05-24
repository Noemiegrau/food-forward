const router = require('express').Router();
const Customer = require('../../models/Customer');
const { Staff, Like, Comment, Post } = require('../../models');
const { aggregate } = require('../../models/Customer');
const inputCheck = require('../../utils/inputCheck');

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
        ]

    });
});

// create a customer
router.post('/customer', ({ body }, res) => {
    const errors = inputCheck(body,
        'id',
        'first_name',
        'last_name',
        'age',
        'household',
        'package',
        'date_received');
    if (errors) {
        res.status(400).json({ error: errors });
    }

    const sql = `INSERT INTO customers
        (id,
            first_name,
            last_name,
            age,
            household,
            package,
            date_received)
            VALUES (?,?,?,?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.age,
        body.household, body.package, body.date_received
    ];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});