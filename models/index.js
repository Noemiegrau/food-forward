// import all models
const Post = require('./Post');
const Staff = require('./Staff');
const Liked = require('./Liked');
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
    through: Liked,
    as: 'liked_posts',
    // as: 'voted_posts', ????
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Post.belongsToMany(Staff, {
    through: Liked,
    as: 'liked_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Liked.belongsTo(Staff, {
    foreignKey: 'staff_id',
    onDelete: 'SET NULL'
  });
  
  Liked.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Staff.hasMany(Liked, {
    foreignKey: 'staff_id'
  });
  
  Post.hasMany(Liked, {
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
  
  module.exports = { Staff, Post, Liked, Comment };