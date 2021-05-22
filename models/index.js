// import all models
const Post = require('./Post');
const Staff = require('./Staff');
const Like = require('./Like');
const Comment = require('./Comment');

// create associations
Staff.hasMany(Post, {
    foreignKey: 'staff_id'
  });
  
  Post.belongsTo(Staff, {
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Staff.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    // as: 'voted_posts', ????
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Post.belongsToMany(Staff, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Like.belongsTo(Staff, {
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Like.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Staff.hasMany(Like, {
    foreignKey: 'staff_id'
  });
  
  Post.hasMany(Like, {
    foreignKey: 'post_id'
  });
  
  Comment.belongsTo(Staff, {
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Staff.hasMany(Comment, {
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });
  
  module.exports = { Staff, Post, Like, Comment };