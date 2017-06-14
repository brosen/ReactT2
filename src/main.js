"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//Router.run(routes, Router.HistoryLocation, function (Handler) {  //for no hash in url, may not work with older browser
Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
});