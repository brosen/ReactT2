"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');


var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    setAuthorState: function (event) {  //called every key press
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; //clear prev errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'first name must be at least 3 chars';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'last name must be at least 3 chars';
            formIsValid = false;
        }

        this.setState.errors({ errors: this.state.errors });
        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();  // so button doesnt submit
        if (!this.authorFormIsValid()) {
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author Saved');
        this.transitionTo('authors');
    },

    render: function () {
        return (
            <AuthorForm author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                error={this.state.errors}
            />
        );
    }
});


module.exports = ManageAuthorPage;