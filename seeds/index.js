const seedStaff = require('./staff-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedLiked = require('./liked-seeds');
const seedCustomers = require('./customer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedStaff();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedLiked();
  console.log('--------------');

  await seedCustomers();
  console.log('--------------');

  process.exit(0);
};

seedAll();