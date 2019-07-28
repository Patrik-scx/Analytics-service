const { knex } = require('../dbs');
const { incrementalQuery } = require('../helpers/query');
const { handlerWrapper } = require('../lib/rest_helpers');

const collect = handlerWrapper(async (req, res) => {
  const { pageId, userId } = req.body;
  const { country } = req.ipInfo;
  const { browser } = req.useragent;
  const queries = [];

  if (pageId) {
    queries.push(knex.raw(incrementalQuery({
      table: 'pages',
      column: 'page_id',
      index: 'page_id',
      value: pageId,
    })));
  }

  if (userId) {
    queries.push(knex.raw(incrementalQuery({
      table: 'users',
      column: 'user_id',
      index: 'user_id',
      value: userId,
    })));
  }

  queries.push(knex.raw(incrementalQuery({
    table: 'countries',
    column: 'country',
    index: 'country',
    value: `'${country || 'localhost'}'`,
  })));

  queries.push(knex.raw(incrementalQuery({
    table: 'browsers',
    column: 'browser',
    index: 'browser',
    value: `'${browser}'`,
  })));

  await Promise.all(queries);

  res.json({});
});

module.exports = {
  collect,
};
