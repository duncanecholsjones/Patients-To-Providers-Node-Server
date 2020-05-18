const userModel = require('../models/users.model.server')

const findAllUsers = () =>
    userModel.findAll().then(result => result)

const createUser = (user) =>
    userModel.create(user)

const deleteUser = (userId) =>
    userModel.destroy({ where: { userId: userId } })

const findUserByCredentials = (findUsername, findPassword) =>
    userModel.findOne({ where: { username: findUsername, password: findPassword } })

const findUserById = (profileId) =>
    userModel.findByPk(profileId)
// userModel.findOne({ where: { username: findUsername, password: findPassword } })



module.exports = {
    findAllUsers,
    createUser,
    deleteUser,
    findUserByCredentials,
    findUserById
}