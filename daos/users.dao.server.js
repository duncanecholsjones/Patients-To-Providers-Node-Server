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

const findUserById = (profileId) =>
    userModel.User.findByPk(profileId)
// userModel.findOne({ where: { username: findUsername, password: findPassword } })

const addConditionToUser = (userId, conditionId) =>
    userModel.User.findByPk(userId).then(user => {
        user.conditions = ("" + conditionId)
        user.save()
        return user
    })

module.exports = {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    findUserByCredentials,
    findUserById,
    addConditionToUser
}