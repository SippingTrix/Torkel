exports.up = function(knex) {
    return knex.schema.createTable('menu_items', table => {
        table.increments('id').notNullable();
        table.integer('restraunt').notNullable();
        table.string('name').notNullable();
        table.float('price').notNullable();
        table.string('description').notNullable();
        table.string('picture_path').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());


        table.foreign('restraunt').references('id').inTable('restraunts');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('menu_items');
};
