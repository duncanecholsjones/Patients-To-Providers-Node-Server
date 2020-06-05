// Author: Duncan Echols-Jones
// 4/3/2020
// Users DAO

const userModel = require('../models/users.model.server')

const findAllUsers = () =>
    userModel.User.findAll().then(result => result)

const createUser = (user) =>
    userModel.User.create(user)

const updateUser = (userId, newUser) =>
    userModel.User.findByPk(userId).then(oldUser => {
        oldUser.username = newUser.username
        oldUser.firstName = newUser.firstName
        oldUser.lastName = newUser.lastName
        oldUser.email = newUser.email
        oldUser.phone = newUser.phone
        oldUser.save()
        return oldUser
    })

const deleteUser = (userId) =>
    userModel.User.destroy({ where: { userId: userId } })

const findUserByCredentials = (findUsername, findPassword) =>
    userModel.User.findOne({ where: { username: findUsername, password: findPassword } })

const findUserById = (userId) =>
    userModel.User.findByPk(userId)

const addConditionToUser = (userId, conditionId) =>
    userModel.User.findByPk(userId).then(user => {
        user.conditions = ("" + conditionId)
        user.save()
        return user
    })

const findOtherUsersWithCondition = (user) => {
    // Get a random condition from the logged in users' list of conditions
    const conditionId = user.conditions[Math.floor(Math.random() * (user.conditions.length - 1))]

    // Get all users and then filter out the ones that have the same condition as our signed in user
    return userModel.User.findAll().then(allUsers =>
        allUsers.filter(otherUser =>
            (otherUser.conditions.includes(conditionId) && otherUser.userId !== user.userId)
        )
    )
}

module.exports = {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    findUserByCredentials,
    findUserById,
    addConditionToUser,
    findOtherUsersWithCondition
}