const express = require('express');
const { getReturningUsersRate } = require('../usersRate');

module.exports = () => express.Router().get('/', getReturningUsersRate);
