var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

var Message = sequelize.define('message', {
    // attributes
    messageId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    messageText: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize, 
    modelName: 'messages'
});

//sequelize.sync()

Message.sync()

module.exports = Message