const usersDao = require('../daos/users.dao.server')

module.exports = (app) => {
    // Log IN session management
    app.post('/api/login', (req, res) => {
        const username = req.body.username
        const password = req.body.password
        usersDao.findUserByCredentials(username, password).then(user => {
            if (user) {
                req.session['currentUser'] = user
                res.json(user)
            } else {
                res.sendStatus(403)
            }
        })
    })

    // Log OUT session management
    app.post('/api/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    })

    // Get current user
    app.post('/api/currentUser', (req, res) => {
        if (req.session['currentUser']) {
            res.json(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    })

}