var db = require('../db'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

var Condition = sequelize.define('condition', {
    // attributes
    conditionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    apiConditionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT
    },
    DescriptionShort: {
        type: Sequelize.TEXT
    },
    MedicalCondition: {
        type: Sequelize.TEXT
    },
    PossibleSymptoms: {
        type: Sequelize.TEXT
    },
    ProfName: {
        type: Sequelize.STRING
    },
    TreatmentDescription: {
        type: Sequelize.TEXT
    }
}, {
    sequelize,
    modelName: 'conditions'
});

Condition.sync()

module.exports = Condition