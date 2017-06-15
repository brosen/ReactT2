"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('Are you sure, its boring')) {
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm('Are you sure, its exiting')) {
                transition.abort();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This app uses the the following tech
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>flux</li>
                        <li>node</li>
                        <li>gulp</li>
                        <li>browserify</li>
                        <li>bootstrap</li>
                     </ul>
                </p>
            </div>
        );
    }
});


module.exports = About;