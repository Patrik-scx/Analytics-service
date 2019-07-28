const express = require('express');
const expressip = require('express-ip');
const useragent = require('express-useragent');

const { collect } = require('../collect');

module.exports = () => express.Router().post(
  '/',
  useragent.express(),
  expressip().getIpInfoMiddleware,
  collect,
);
