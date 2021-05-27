// const sequelize = require('../config/connection');
const { Staff } = require('../models');

const staffdata = [
  {
    first_name: 'Diane',
    last_name: 'Lane',
    staff_number: '01',
    email: 'dlane@yahoo.com',
    password: 'deaccublistinnitned'
  },
  {
    first_name: 'Chris',
    last_name: 'Cod',
    staff_number: '02',
    email: 'ccod@gmail.com',
    password: 'vaibrandobaxotonths'
  },
  {
    first_name: 'Hazel',
    last_name: 'Nutt',
    staff_number: '03',
    email: 'hnutt@yahoo.com',
    password: 'koasteseppethiveliulti'
  },
  {
    first_name: 'James',
    last_name: 'Black',
    staff_number: '04',
    email: 'jf@goldenbough.edu',
    password: 'swutorshifitassastezra'
  },
  {
    first_name: 'Simmon',
    last_name: 'Clark',
    staff_number: '05',
    email: 'sclark@ualaska.edu',
    password: 'reabilismignideop'
  },
  {
    first_name: 'Bradley',
    last_name: 'Moore',
    staff_number: '06',
    email: 'bradleymoore200@cbc.ca',
    password: 'pasgde124r3'
  },
  {
    first_name: 'Stan',
    last_name: 'Williams',
    staff_number: '07',
    email: 'stanstan430@mac.ca',
    password: 'newhhg56T'
  },
  {
    first_name: 'Alex',
    last_name: 'Rose',
    staff_number: '08',
    email: 'rose1330@gmail.ca',
    password: 'ress995J'
  },
  {
    first_name: 'Tom',
    last_name: 'Lee',
    staff_number: '09',
    email: 'tommylee0@outlook.ca',
    password: '67^yh&gV88'
  },
  {
    first_name: 'Chad',
    last_name: 'Ford',
    staff_number: '10',
    email: 'chadford0@gmail.ca',
    password: 'kaqGThnbw76T'
  }
];

const seedStaff = () => Staff.bulkCreate(staffdata, {individualHooks: true});

module.exports = seedStaff;