const usersDao = require('../daos/users.dao.server')

module.exports = (app) => {

    // Find all users
    app.get('/api/users', (req, res) => {
        usersDao.findAllUsers()
            .then(results => res.json(results))
    })

    // our 'Register' function
    app.post('/api/users', (req, res) => {
        const newUser = req.body;
        usersDao.createUser(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser
                res.json(actualUser)
            }) 
    })

    // Get another user's profile
    app.post('/api/otherUser/:profileId', (req, res) => {
        usersDao.findUserById(req.params.profileId).then(otherProfile => 
            res.json(otherProfile)
        )
    })
}