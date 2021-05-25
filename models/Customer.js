const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {}

// create fields/columns for Customer model
Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      household: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      package: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      date_received: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      timestamps: true,
      // timestamps: false,?
      freezeTableName: true,
      underscored: true,
      modelName: 'customer'
    }
  );
  
  module.exports = Customer;