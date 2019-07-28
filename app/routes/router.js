const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerDocument = require('../swagger.json');
const { checkToken, errorHandler } = require('../middlewares');

const collectRoutes = require('./collectRoutes');
const pageViewsRoutes = require('./pageViewsRoutes');
const usersRateRoutes = require('./usersRateRoutes');

const applyRoutes = () => {
  const Router = express.Router()
    .use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(cors())
    .use(bodyParser.json())
    .use(checkToken)
    .use('/collect', collectRoutes())
    .use('/page-views', pageViewsRoutes())
    .use('/users-rate', usersRateRoutes())
    .use(errorHandler);

  return Router;
};

module.exports = { applyRoutes };
