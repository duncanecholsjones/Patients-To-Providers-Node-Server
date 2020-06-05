// Author: Duncan Echols-Jones
// 4/3/2020
// Messages controller


const messagesDao = require('../daos/messages.dao.server')

module.exports = (app) => {

    // Send a message to a user
    app.post('/api/sendMessage', (req, res) => {
        const message = req.body
        console.log(message)
        messagesDao.sendMessage(message)
            .then(actualMessage =>
                res.json(actualMessage)
            )
    })

    // Get all messages
    app.get('/api/messages', (req, res) => {
        messagesDao.getMessages()
            .then(actualMessages => res.json(actualMessages))
    })

    // Get all outgoing messages from a user
    app.get(`/api/users/:userId/messages/outgoing`, (req, res) => {
        messagesDao.getOutgoingMessagesById(req.params.userId)
            .then(actualMessages => res.json(actualMessages))
    })

    // Get all incoming messages going to a user
    app.get(`/api/users/:userId/messages/incoming`, (req, res) => {
        messagesDao.getIncomingMessagesById(req.params.userId)
            .then(actualMessages => res.json(actualMessages))
    })
}