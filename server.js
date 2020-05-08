var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',
        'http://localhost:4200');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});

var db = require('./db')
// Later, when we want to do session management
// var session = require('express-session')
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'any string'
// }));

// require('./controllers/session.controller.server')(app)
// require('./controllers/quiz.controller.server')(app)
// require('./controllers/question.controller.server')(app)
require('./controllers/users.controller.server')(app)
// require('./controllers/quiz-attempts.controller.server')(app)

app.listen(8080)

