const { knex } = require('../dbs');
const { handlerWrapper } = require('../lib/rest_helpers');

const getPageViewsByPageId = handlerWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await knex('pages').select('views').where({ page_id: id }).limit(1);

  if (!result.length) return res.status(404).send('Not found');
  return res.json(result.shift().views);
});

const getPageViewsByBrowser = handlerWrapper(async (req, res) => {
  const { browser } = req.params;
  const result = await knex('browsers').select('views').where({ browser }).limit(1);

  if (!result.length) return res.status(404).send('Not found');
  return res.json(result.shift().views);
});

const getPageViewsByCountry = handlerWrapper(async (req, res) => {
  const { country } = req.params;
  const result = await knex('countries').select('views').where({ country }).limit(1);

  if (!result.length) return res.status(404).send('Not found');
  return res.json(result.shift().views);
});

module.exports = {
  getPageViewsByPageId,
  getPageViewsByBrowser,
  getPageViewsByCountry,
};
