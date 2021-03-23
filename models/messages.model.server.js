// Author: Duncan Echols-Jones
// 2/18/2021
// Messages model

// Establish our Message model
var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

// Define our Message entity
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