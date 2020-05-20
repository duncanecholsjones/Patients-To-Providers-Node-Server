const conditionModel = require('../models/conditions.model.server')

const createCondition = (condition) =>
    conditionModel.create(condition)

module.exports = {
    createCondition
}