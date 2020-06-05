// Author: Duncan Echols-Jones
// 4/3/2020
// Database definition 

const Sequelize = require('sequelize');

const sequelize = new Sequelize('cs5610_sp20', 'cs5610', 'cs5610', {
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





