const userModel = require('../models/users.model.server')

const findAllUsers = () =>
    userModel.findAll().then(result => result)

const createUser = (user) =>
    userModel.create(user)

const deleteUser = (userId) =>
    userModel.delete(user)

const findUserByCredentials = (username, password) =>
    userModel.findOne({
        username: username,
        password: password
    })

module.exports = {
    findAllUsers,
    createUser,
    deleteUser,
    findUserByCredentials
}