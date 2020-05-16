const messageModel = require('../models/messages.model.server')
const userMessagesModel = require('../models/usermessages.model.server')

const sendMessage = (message) =>
    messageModel.create({messageText: message.messageText}).then(actualMessage =>
        userMessagesModel.create({ fromUserId: message.fromUserId, toUserId: message.toUserId, messageId: actualMessage.messageId })
    )

const getMessages = () =>
    messageModel.findAll().then(result => result)

module.exports = {
    sendMessage,
    getMessages
}