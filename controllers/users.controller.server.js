const usersDao = require('../daos/users.dao.server')
const conditionsDao = require('../daos/conditions.dao.server')

module.exports = (app) => {

    // Find all users
    app.get('/api/users', (req, res) => {
        usersDao.findAllUsers()
            .then(results => res.json(results))
    })

    // Register new user
    app.post('/api/users', (req, res) => {
        const newUser = req.body;
        usersDao.createUser(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser
                res.json(actualUser)
            })
    })

    // Update user fields
    app.put('/api/user/:userId/update', (req, res) => {
        const newUser = req.body
        usersDao.updateUser(req.params.userId, newUser).then(actualUser => {
            req.session['currentUser'] = actualUser
            res.json(actualUser)
        })
    })

    // Delete user
    app.delete('/api/user/:userId/delete', (req, res) =>
        usersDao.deleteUser(req.params.userId).then(response => {
            req.session.destroy()
            res.sendStatus(200)
        })
    )

    // Get another user's profile
    app.post('/api/otherUser/:profileId', (req, res) => {
        usersDao.findUserById(req.params.profileId).then(otherProfile =>
            res.json(otherProfile)
        )
    })

    // Add condition to a user
    app.post('/api/user/conditions', (req, res) => {
        const condition = req.body;
        const user = req.session['currentUser']
        conditionsDao.createCondition(condition).then(actualCondition =>
            res.json(usersDao.addConditionToUser(user.userId, actualCondition.apiConditionId)))
    })

    // Get all other users with same condition as signed in user
    app.get('/api/user/conditions/getOthers', (req, res) =>
        // const user = req.session['currentUser']
        usersDao.findUserById(10).then(actualUser =>
            usersDao.findOtherUsersWithCondition(actualUser).then(actualUsers => res.json(actualUsers))
        )
    )
}