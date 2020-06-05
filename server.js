// Author: Duncan Echols-Jones
// 4/3/2020
// Server.js
// Entry point into this node.js server. We use a react-node.js-mysql with sequelize as the
// middle-tier to database connecting library.

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin',
        'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});

var db = require('./db')

var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.get('/', function(req, res) {
    res.send("server running")
})

require('./controllers/session.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/messages.controller.server')(app)

app.listen(8181)

