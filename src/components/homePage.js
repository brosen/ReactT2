"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Plural Sight Admin</h1>
                <p>React, react router, and flux for web apps</p>
            </div>
        );
    }
});


module.exports = Home;