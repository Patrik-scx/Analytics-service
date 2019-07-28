const express = require('express');

const {
  getPageViewsByPageId,
  getPageViewsByBrowser,
  getPageViewsByCountry,
} = require('../pageViews');

module.exports = () => express.Router()
  .get('/page-id/:id', getPageViewsByPageId)
  .get('/browser/:browser', getPageViewsByBrowser)
  .get('/country/:country', getPageViewsByCountry);
