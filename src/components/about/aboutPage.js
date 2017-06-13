"use strict";

var React = require('react');

var About = React.createClass({
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