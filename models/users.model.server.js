// Author: Duncan Echols-Jones
// 2/18/2021
// Users model

// Establish our User model
var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

// Define our User entity
var User = sequelize.define('user', {
    // attributes
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.ENUM,
        values: ['PATIENT', 'PROVIDER'],
        allowNull: false
    },
    conditions: {
        type: Sequelize.STRING,
        defaultValue: "",
        get() {
            return this.getDataValue('conditions').split(";")
        },
        set(val) {
            this.setDataValue('conditions', this.conditions.concat(val + ";"));
        }
    }

}, {
    sequelize,
    modelName: 'users'
});

User.sync()

const addCondition = (conditionId) =>
    User.conditions = conditionId

module.exports = { User, addCondition }
