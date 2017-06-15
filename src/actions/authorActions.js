"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorAPi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorAPi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
};

module.exports = AuthorActions;