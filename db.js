const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
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

const userModel = require('./models/users.model.server')
const messageModel = require('./models/messages.model.server')
const userMessageModel = require('./models/usermessages.model.server')



