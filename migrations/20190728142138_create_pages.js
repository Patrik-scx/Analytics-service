exports.up = async knex => knex.schema.createTable('pages', (table) => {
  table.increments();
  table.integer('page_id').notNullable().unique();
  table.integer('views').notNullable();
});

exports.down = knex => knex.schema.dropTable('pages');
