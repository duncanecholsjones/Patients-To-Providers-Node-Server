// Author: Duncan Echols-Jones
// 2/18/2021
// Database definition 

// Initialize Sequelize, using mySQL as our database connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize('patients_to_providers_db', 'cs5610', 'pass', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export our new mySQL database
module.exports = db;

// Load our entities
const userModel = require('./models/users.model.server')
console.log("LOADED USER MODEL")


const messageModel = require('./models/messages.model.server')
console.log("LOADED MESSAGE MODEL")


const conditionModel = require('./models/conditions.model.server')
console.log("LOADED CONDITION MODEL")


const userMessageModel = require('./models/usermessages.model.server')
console.log("LOADED USERMESSAGE MODEL")





