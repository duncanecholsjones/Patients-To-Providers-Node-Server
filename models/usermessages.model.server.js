// Author: Duncan Echols-Jones
// 2/18/2021
// User-messages model

// Establish our usermessage model, which persists messages from sender to receiver users
var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const messageModel = require('./messages.model.server')
const userModel = require('./users.model.server')

// Define our User-Message entity
var UserMessage = sequelize.define('user_message', {
    // attributes
    fromUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: userModel.User,
            key: 'userId'
        }
    },
    toUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: userModel.User,
            key: 'userId'
        }
    },
    messageId: {
        type: Sequelize.INTEGER,
        references: {
            model: messageModel,
            key: 'messageId'
        }
    }
}, {
    sequelize,
    modelName: 'user_messages'
});

// sequelize.sync()

UserMessage.sync()

module.exports = UserMessage