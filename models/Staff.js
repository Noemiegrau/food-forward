const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Staff model
class Staff extends Model {
    // set up method to run on instance data (per staff) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}

// create fields/columns for Staff model
Staff.init(
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
      // username: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1]
      //   }
      // },
      staff_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      }
    },
    {
      hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newStaffData) {
          newStaffData.password = await bcrypt.hash(newStaffData.password, 10);
          return newStaffData;
        },
  
        async beforeUpdate(updatedStaffData) {
          updatedStaffData.password = await bcrypt.hash(updatedStaffData.password, 10);
          return updatedStaffData;
        }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'staff'
    }
  );
  
  module.exports = Staff;