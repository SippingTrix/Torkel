exports.up = function(knex) {
    return knex.schema.createTable('order_items', table => {
        table.increments('id').notNullable();
        table.integer('order').notNullable();
        table.integer('item').notNullable();
        table.integer('count').notNullable();
        table.string('special_instructions').notNullable();

        table.foreign('order').references('id').inTable('orders');
        table.foreign('item').references('id').inTable('menu_items');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('order_items');
};
