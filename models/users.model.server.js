var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

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
    }
}, {
    sequelize,
    modelName: 'users'
});

User.sync()

//sequelize.sync()
//User.hasMany(User, {as: 'user_message', through: 'UserMessage' , foreignKey: 'userId'});
//User.belongsToMany(User, {as: 'user_message', through: 'UserMessage', foreignKey: 'userId'})
// sequelize.sync()

module.exports = User
