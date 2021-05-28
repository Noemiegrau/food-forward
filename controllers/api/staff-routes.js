const router = require('express').Router();
const { Staff, Liked, Comment, Post } = require('../../models');

// get all Staffs
router.get('/', (req, res) => {
  Staff.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbStaffData => res.json(dbStaffData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one staff member
router.get('/:id', (req, res) => {
  Staff.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'post_text', 'created_at']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['post_text']
        }
      },
      {
        model: Post,
        attributes: ['post_text'],
        through: Liked,
        as: 'liked_posts'
      }
    ]
  })
    .then(dbStaffData => {
      if (!dbStaffData) {
        res.status(404).json({ message: 'No Staff member found with this id' });
        return;
      }
      res.json(dbStaffData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a staff member
router.post('/', (req, res) => {
  Staff.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    // username: req.body.username,
    staff_number: req.body.staff_number,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbStaffData => {
      // declare session variables
      req.session.save(() => {
        req.session.staff_id = dbStaffData.id;
        // req.session.user_id = dbStaffData.id; ??
        req.session.email = dbStaffData.email;
        req.session.loggedIn = true;

        res.json(dbStaffData);
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will be found at http://localhost:3000/api/staff/login (/:id)
router.post('/login', (req, res) => {
  Staff.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbStaffData => {
    if (!dbStaffData) {
      res.status(400).json({ message: 'No staff member with that email address!' });
      return;
    }

    const validPassword = dbStaffData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.save(() => {
        req.session.staff_id = dbStaffData.id;
        // req.session.user_id = dbStaffData.id; ??
        req.session.email = dbStaffData.email;
        req.session.loggedIn = true;

      // res.json({ user: dbStaffData, message: 'You are now logged in!' });
      res.json({ staff: dbStaffData, message: 'You are now logged in!' });
      });
    });
  });
});

// update a staff member
router.put('/:id', (req, res) => {
  // pass in req.body instead to only update what's passed through
  Staff.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbStaffData => {
      if (!dbStaffData) {
        res.status(404).json({ message: 'No staff member found with this id' });
        return;
      }
      res.json(dbStaffData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a staff member
router.delete('/:id', (req, res) => {
  Staff.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbStaffData => {
      if (!dbStaffData) {
        res.status(404).json({ message: 'No staff member found with this id' });
        return;
      }
      res.json(dbStaffData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// logout logic destroys the session
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;










// const Staff = require('../../models/Staff');
// const { Staff, Like, Comment, Post } = require('../../models');
// const { aggregate } = require('../../models/Staff');

// // get all staff
// router.get('/', (req, res) => {
//     Staff.findAll({})
//         .then(dbStaffData => res.json(dbStaffData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });
// // get a single customer
// router.get('/:id', (req, res) => {
//     Staff.findOne({
//         where: {
//             attributes: [
//                 'id',
//                 'first_name',
//                 'last_name',
//                 'staff_number',
//                 'email',
//                 'password'
//             ]
//         }
//     })

//     .then(dbStaffData => {
//             if (!dbStaffData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbStaffData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

 



