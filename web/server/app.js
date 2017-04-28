//app.js
"use strict";
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import path from 'path';
import favicon from 'serve-favicon';
import auth from './auth';

let app = express();
let env = config.env || 'dev';
let version_api = 'v1';
if(env === 'dev') {
  app.use(require('connect-livereload')());
  app.use("/fonts",express.static("app/bower_components/bootstrap/fonts"));
}

if(env === "express_only") {
  // Make express server support CORS request in another server
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //It need port also, like http://localhost:8080
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}else{ //web artifact
  app.use(express.static(config[env].dist));
  app.use(favicon(path.join(__dirname, '../', config[env].dist, '/favicon.ico')));
}

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(auth);
// rest api
app.use('/api/task', require('./api/task'));
app.use('/api/label', require('./api/label'));
app.use('/api/prop', require('./api/properties'));
app.use('/api/datasource', require('./api/datasource'));
app.use('/api/datainterface', require('./api/datainterface'));
app.use('/api/event', require('./api/event'));
app.use('/api/config', require('./api/globalconfig'));
app.use('/api/user', require('./api/user'));
app.use('/api/chart', require('./api/chart'));

//rest api for BI
app.use('/ocsp/' +version_api+ '/api/events', require('./api/events'));
app.use('/ocsp/' +version_api+ '/api/streams', require('./api/streams'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../',config[env].dist,'/404.html'));// load the single view file (angular will handle the page changes on the front-end)
});

app.listen(config[env].port, function () {
  console.log('App listening on port ' + config[env].port + "!");
});

module.exports = app;
