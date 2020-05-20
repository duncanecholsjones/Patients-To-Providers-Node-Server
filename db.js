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

// var order = [
//   'users',
//   'messages',
//   'conditions',
//   'usermessages'
// ];

// async.eachSeries(order, function(file, callback) {
//   var model = require(currentDir + '/models' + file + '.model.js');
//   model
//       .sync({force: true})
//       .then(function() {
//           console.log('Force-synced %s', file);
//           callback();
//       })
//       .catch(callback);
// }, function(err) {
//   if(err) throw err;
//   console.log('Completed migration in order as such %o', files);
// });

// createModels = async () => {

const userModel = require('./models/users.model.server')
console.log("LOADED USER MODEL")


const messageModel = require('./models/messages.model.server')
// messageModel.sync()
console.log("LOADED MESSAGE MODEL")


const conditionModel = require('./models/conditions.model.server')
// conditionModel.sync()
console.log("LOADED CONDITION MODEL")


const userMessageModel = require('./models/usermessages.model.server')
// userMessageModel.sync()
console.log("LOADED USERMESSAGE MODEL")
//}

// createModels()
// sequelize.sync()




