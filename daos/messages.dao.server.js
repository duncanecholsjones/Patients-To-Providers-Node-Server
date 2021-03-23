// Author: Duncan Echols-Jones
// 2/18/2021
// Messages DAO

// Establish our Messages data access object
const userModel = require('../models/users.model.server')
const messageModel = require('../models/messages.model.server')
const userMessagesModel = require('../models/usermessages.model.server')

const sendMessage = (message) =>
    messageModel.create({ messageText: message.messageText }).then(actualMessage =>
        userMessagesModel.create({ fromUserId: message.fromUserId, toUserId: message.toUserId, messageId: actualMessage.messageId })
    )

const getMessages = () =>
    messageModel.findAll().then(result => result)

const getMessageText = async (messageId) =>
    messageModel.findByPk(messageId).then(actualMessage =>
        actualMessage.messageText
    )

const getUserForMessage = async (userId) =>
    userModel.User.findByPk(userId).then(actualUser => actualUser)

const getOutgoingMessagesById = async (userId) => {
    const outgoingUserMessages = await userMessagesModel.findAll({ where: { fromUserId: userId } })
    for (const message of outgoingUserMessages) {
        message.dataValues['messageText'] = await getMessageText(message.id)
        message.dataValues['recipientInfo'] = await getUserForMessage(message.toUserId)
    }
    return outgoingUserMessages
}


const getIncomingMessagesById = async (userId) => {
    const incomingUserMessages = await userMessagesModel.findAll({ where: { toUserId: userId } })
    for (const message of incomingUserMessages) {
        message.dataValues['messageText'] = await getMessageText(message.id)
        message.dataValues['senderInfo'] = await getUserForMessage(message.fromUserId)
    }
    return incomingUserMessages
}

module.exports = {
    sendMessage,
    getMessages,
    getOutgoingMessagesById,
    getIncomingMessagesById
}