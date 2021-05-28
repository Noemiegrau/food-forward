const router = require('express').Router();
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get dashboard info
// router.get('/', (req, res) => {
//     res.render('dashboard')
// });

router.get('/', (req, res) => {
    Staff.findOne({
      where: {
          // use the ID from the session
          id: req.params.id
      },
      attributes: [
        'id',
        'first_name',
        'last_name',
        'staff_number',
        'email',
      ]
    })

      .then(dbStaffData => {
        res.render('dashboard', res.json(dbStaffData));

      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

  });


module.exports = router;
