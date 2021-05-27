const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: 'Thanks for the info!',
      staff_id: 1,
      post_id: 1
    },
    {
      comment_text: 'Got it.',
      staff_id: 2,
      post_id: 1
    },
    {
      comment_text: 'Will make sure Joe knows about it.',
      staff_id: 3,
      post_id: 1
    },
    {
      comment_text: 'Ok.',
      staff_id: 4,
      post_id: 1
    },
    {
        comment_text: 'Hi, I didn’t receive the email, can you send it to me again please? Thank you',
        staff_id: 1,
        post_id: 2
      },
      {
        comment_text: 'I did not receive the email neither!!',
        staff_id: 2,
        post_id: 2
      },
      {
        comment_text: 'Read it already.',
        staff_id: 3,
        post_id: 2
      },
      {
        comment_text: 'Can we get a printed copy of the handbook by any chance?',
        staff_id: 4,
        post_id: 2
      }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;