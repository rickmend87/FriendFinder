// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

// Express set up
var app = express();
var PORT = process.env.PORT || 3000;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static components
app.use('/', express.static(__dirname + '/app/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Routes
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// Start listening on port
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})