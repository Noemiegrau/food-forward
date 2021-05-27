const { Post } = require('../models');

const postdata = [
  {
    post_text: 'Just to let everyone know the food delivery will arrive on Thursday instead of Wednesday this week. John will be in charge of the reception. Thank!',
    staff_id: 5
  },
  {
    post_text: 'The company policies have changed. Make sure you take a lot at the new employee handbook. It should have been sent to you by email.',
    staff_id: 6
  },
  {
    post_text: 'Sorry guys I am running late today. Will arrive in 20 minutes.',
    staff_id: 7
  },
  {
    post_text: 'Hey I will be in charge with organizing the christmas celebrations so please reach out to me for any request related to that.',
    staff_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;