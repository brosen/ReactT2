"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null, //will copy CREATE_AUTHOR over to value side
    UPDATE_AUTHOR: null,
    DELETE_AUTHOR: null
});