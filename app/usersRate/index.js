const { knex } = require('../dbs');
const { handlerWrapper } = require('../lib/rest_helpers');

const getReturningUsersRate = handlerWrapper(async (req, res) => {
  const result = await knex.raw(`
    SELECT TRUNC((SELECT count(*) FROM users where views > 1)/ count(*)::decimal, 5) AS rate
    FROM users
  `);

  return res.json(result.rows.shift().rate);
});


module.exports = {
  getReturningUsersRate,
};
