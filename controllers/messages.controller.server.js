const messagesDao = require('../daos/messages.dao.server')

module.exports = (app) => {

    app.post('/api/sendMessage', (req, res) => {
        const message = req.body
        console.log(message)
        messagesDao.sendMessage(message)
            .then(actualMessage =>
                res.json(actualMessage)
            )
    })

    app.get('/api/messages', (req, res) => {
        messagesDao.getMessages()
        .then(actualMessages => res.json(actualMessages))
    })
}