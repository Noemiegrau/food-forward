const router = require('express').Router();
const Staff = require('../../models/Staff');
const { Staff, Like, Comment, Post } = require('../../models');
const { aggregate } = require('../../models/Staff');

// get all staff
router.get('/', (req, res) => {
    Customer.findAll({})
        .then(dbStaffData => res.json(dbStaffData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});
// get a single customer
router.get('/:id', (req, res) => {
    Staff.findOne({
        where: {
            attributes: [
                'id',
                'first_name',
                'last_name',
                'staff_number',
                'email',
                'password'
            ]
        }
    })

    .then(dbStaffData => {
            if (!dbStaffData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbStaffData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});