exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments();
  table.text('user_id').notNullable().unique();
  table.integer('views').notNullable();
});

exports.down = knex => knex.schema.dropTable('users');
