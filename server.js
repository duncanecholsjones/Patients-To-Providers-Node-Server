// Author: Duncan Echols-Jones
// 2/18/2021
// Server.js
// Entry point into this node.js server. We use a react-node.js-mysql with sequelize as the
// middle-tier to database connecting library.

// Use express to create server
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set HTTP controls
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

// Set up session 
var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.get('/', function(req, res) {
    res.send("Server Running.")
})

// Load controllers, our webservices endpoints
require('./controllers/session.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/messages.controller.server')(app)

// Listen on 8181
app.listen(8181)

