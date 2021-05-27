const { Liked } = require('../models');

const likeddata = [
  {
    staff_id: 1,
    post_id: 1
  },
  {
    staff_id: 2,
    post_id: 1
  },
  {
    staff_id: 3,
    post_id: 2
  },
  {
    staff_id: 4,
    post_id: 3
  },
  {
    staff_id: 5,
    post_id: 3
  },
  {
    staff_id: 6,
    post_id: 3
  },
  {
    staff_id: 7,
    post_id: 4
  },
  {
    staff_id: 8,
    post_id: 1
  }
];

const seedLiked = () => Liked.bulkCreate(likeddata);

module.exports = seedLiked;