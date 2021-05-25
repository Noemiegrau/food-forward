const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const customerRoutes = require('./customer-routes');
const postRoutes = require('./post-routes');
const staffRoutes = require('./staff-routes');

router.use('/customers', customerRoutes);
router.use('/posts', postRoutes);
router.use('/staff', staffRoutes);
router.use('/comment', commentRoutes);

module.exports = router;