const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const contactUsRoutes = require('./contact-us-routes.js');
const welcomePage = require('./welcome-page.js');
const dashboardRoutes = require('./dashboard-routes.js');
const packagesRoutes = require('./packages.js');
const loginRoutes = require('./login-routes.js');
const chatRoutes = require('./chat-routes.js');
const allCustomerRoutes = require('./allCustomer-routes.js');
const singleCustomerRoutes = require('./single-customer-routes.js');
// const withAuth = require('../utils/auth');

router.use('/contact-us', contactUsRoutes);
router.use('/welcome-page', welcomePage);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/packages', packagesRoutes);
router.use('/login', loginRoutes);
router.use('/chat', chatRoutes);
router.use('/allCustomer', allCustomerRoutes);
router.use('/single-customer', singleCustomerRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;