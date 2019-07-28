const express = require('express');
const { applyRoutes } = require('./routes');
const logger = require('./lib/logger');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use('/api', applyRoutes());

app.listen(3000, () => logger.info(`App listening on port ${port}!`));
