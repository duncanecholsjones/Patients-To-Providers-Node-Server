const usersDao = require('../daos/users.dao.server')

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        usersDao.findAllUsers()
            .then(results => res.json(results))
    })
    // this is our 'Register' function
    app.post('/api/users', (req, res) => {
        const newUser = req.body;
        usersDao.createUser(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser
                res.json(actualUser)
            }) 
    })
}