require('dotenv').config({ path: '../../../.env' });

module.exports = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  timezone: 'UTC',
  debug: process.env.NODE_ENV === 'dev',
  migrations: {
    directory: '../../../migrations',
  },
  seeds: {
    directory: '../../../seeds',
  },
};
