var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const User = require('./users.model.server')
const Message = require('./messages.model.server')


var UserMessage = sequelize.define('user_message', {
    // attributes
    fromUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'userId'
        }
    },
    toUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'userId'
        }
    },
    messageId: {
        type: Sequelize.INTEGER,
        references: {
            model: Message,
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