// const sequelize = require('../config/connection');
// const { Customer } = require('../models/Customer');
const Customer = require('../models/Customer');

const customerdata = [
  {
    first_name: 'James',
    last_name: 'Fraser',
    age: '45',
    household: '4',
    package: '3',
    date_received: '2021-04-01'
  },
  {
    first_name: 'Jack',
    last_name: 'London',
    age: '32',
    household: '6',
    package: '2',
    date_received: '2021-04-01'
  },
  {
    first_name: 'Robert',
    last_name: 'Bruce',
    age: '28',
    household: '7',
    package: '3',
    date_received: '2021-04-08'
  },
  {
    first_name: 'Jack',
    last_name: 'London',
    age: '32',
    household: '6',
    package: '2',
    date_received: '2021-04-01'
  },
  {
    first_name: 'Peter',
    last_name: 'Greenaway',
    age: '24',
    household: '5',
    package: '2',
    date_received: '2021-04-08'
  },
  {
    first_name: 'Derek',
    last_name: 'Jarman',
    age: '32',
    household: '5',
    package: '3',
    date_received: '2021-04-08'
  },
  {
    first_name: 'Paolo',
    last_name: 'Pasolini',
    age: '40',
    household: '6',
    package: '3',
    date_received: '2021-04-15'
  },
  {
    first_name: 'Sandy',
    last_name: 'Powell',
    age: '22',
    household: '3',
    package: '1',
    date_received: '2021-04-15'
  },
  {
    first_name: 'Emil',
    last_name: 'Zola',
    age: '31',
    household: '5',
    package: '3',
    date_received: '2021-04-15'
  },
  {
    first_name: 'Sissy',
    last_name: 'Coalpits',
    age: '41',
    household: '4',
    package: '2',
    date_received: '2021-04-23'
  },
  {
    first_name: 'Antoinette',
    last_name: 'Capet',
    age: '39',
    household: '3',
    package: '1',
    date_received: '2021-04-23'
  },
  {
    first_name: 'Samuel',
    last_name: 'Delany',
    age: '35',
    household: '5',
    package: '3',
    date_received: '2021-04-23'
  },
  {
    first_name: 'Tony',
    last_name: 'Duvert',
    age: '37',
    household: '6',
    package: '3',
    date_received: '2021-04-23'
  }
];

const seedCustomers = () => Customer.bulkCreate(customerdata, {individualHooks: true});

module.exports = seedCustomers;