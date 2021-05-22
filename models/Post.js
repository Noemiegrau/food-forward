const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {
  static uplike(body, models) {
    return models.Like.create({
      staff_id: body.staff_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'post_text',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'staff_id', 'post_id', 'created_at'],
            include: {
              model: models.Staff,
              attributes: ['first_name']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    staff_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'staff',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    // timestamps: true,
    modelName: 'post'
  }
);

module.exports = Post;