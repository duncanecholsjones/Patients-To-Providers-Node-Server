// Author: Duncan Echols-Jones
// 4/3/2020
// Conditions DAO

const conditionModel = require('../models/conditions.model.server')

const createCondition = (condition) =>
    conditionModel.create(condition)

module.exports = {
    createCondition
}