const router = require('express').Router();
const { Staff, Liked, Comment, Post } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    // check the session
      // expects => {comment_text: "This is the comment", staff_id: 1, post_id: 1}
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        staff_id: req.session.staff_id
        // user_id: req.session.staff_id ??
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

module.exports = router;