exports.up = function(knex) {
    return knex.schema.createTable('authorized_users', table => {
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.integer('order_id').notNullable();

        table.foreign('order_id').references('orders').inTable('id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authorized_users');
};
