exports.up = knex => knex.schema.createTable('countries', (table) => {
  table.increments();
  table.text('country').notNullable().unique();
  table.integer('views').notNullable();
});

exports.down = knex => knex.schema.dropTable('countries');
