exports.up = knex => knex.schema.createTable('browsers', (table) => {
  table.increments();
  table.text('browser').notNullable().unique();
  table.integer('views').notNullable();
});

exports.down = knex => knex.schema.dropTable('browsers');
