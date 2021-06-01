const router = require('express').Router();
const { Post, Staff, Comment, Customer, Liked } = require('../models');

// get dashboard info
router.get('/', (req, res) => {
    res.render('dashboard')
});

// Maybe future enhancement?
// router.get('/:email', (req, res) => {
//     Staff.findOne({
//       where: {
//           // use the ID from the session ??
//         //   email: req.body.email
//         // id: req.params.id
//           email: req.params.email
//         // id: req.session.staff_id
//       },
//       attributes: [
//         'id',
//         'first_name',
//         'last_name',
//         'staff_number',
//         'email'
//       ]
//     })

//       .then(dbStaffData => {
//         if (!dbStaffData) {
//             res.status(404).json({ message: 'No staff member found with this id/email' });
//             return;
//           }

//         // serialize the data
//         const staff = dbStaffData.get({ plain: true });

//         // pass data to template
//         res.render('dashboard', { 
//             staff
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       }); 

//   });


module.exports = router;