// Author: Duncan Echols-Jones
// 2/18/2021
// Conditions DAO

const conditionModel = require('../models/conditions.model.server')

// async function createCondition(condition) { 
//     conditionModel.Condition.findOne({ where: { apiConditionId: parseInt(condition.apiConditionId) } }).then(
//         conditionFromModel => {
//             if (conditionFromModel === null) {
//                 return conditionModel.create(condition)
//             } else {
//               return conditionModel
//             }    
//         }
//     )
// }

const createCondition = (condition) =>
    conditionModel.create(condition)

module.exports = {
    createCondition
}