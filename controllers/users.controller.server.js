const usersDao = require('../daos/users.dao.server')
const conditionsDao = require('../daos/conditions.dao.server')

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

    // Update function
    app.put('/api/user/:userId/update', (req, res) => {
        const newUser = req.body
        usersDao.updateUser(req.params.userId, newUser).then(actualUser => {
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

    // Add condition to a user
    app.post('/api/user/conditions', (req, res) => {
        const condition = req.body;
        const user = req.session['currentUser']
        console.log(user)
        conditionsDao.createCondition(condition).then(actualCondition =>
            res.json(usersDao.addConditionToUser(user.userId, actualCondition.apiConditionId)))
    })
}