var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
* router  --> need to find better api
*/
var studentRoute = require('./server/student/route/route');
var collegeRoute = require('./server/college/route/route');
var departmentRoute = require('./server/department/route/route');



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/client'));


studentRoute(app);
collegeRoute(app);
departmentRoute(app);

app.listen(3000);
console.log("App listening on port 3000");

//expose app
module.exports = app;