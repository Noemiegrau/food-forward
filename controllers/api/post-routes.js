const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Staff, Liked, Comment, Post } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_text',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM liked WHERE post.id = liked.post_id)'), 'liked_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'staff_id', 'created_at'],
          include: {
            model: Staff,
            attributes: ['first_name']
          }
        },
        {
          model: Staff,
          attributes: ['first_name']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post_text',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM liked WHERE post.id = liked.post_id)'), 'liked_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'staff_id', 'created_at'],
          include: {
            model: Staff,
            attributes: ['first_name']
          }
        },
        {
          model: Staff,
          attributes: ['first_name']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;