// server.js

// modules =========================

var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    methodOverride = require('method-override');

// configuration =========================

//config files

var db = require('./config/db');

//set port
var port = process.env.PORT || 3000;

// connect to mongoDB 
mongoose.connect('mongodb://localhost/dev-des-proj');

// get all data of the body (POST) params
// parse application/json
app.use(bodyParser.json());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


// routes =========================

require('./app/routes')(app); // configure routes

// fire it up, babe =========================

// start up app at http://localhost:3000
app.listen(port);

// say haaaaay on the console
console.log('Kyle is listening on port ' + port);

//expose the app
exports = module.exports = app;





















