const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Liked extends Model {}

Liked.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    staff_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'staff',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'liked'
  }
);

module.exports = Liked;