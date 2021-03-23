// Author: Duncan Echols-Jones
// 2/18/2021
// Session controller

// Establish our Session endpoints
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
            const user = req.session['currentUser']
            user['password'] = '****'
            res.json(user)
        } else {
            res.sendStatus(403)
        }
    })

}