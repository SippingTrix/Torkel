exports.up = function(knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').notNullable();
        table.integer('order').notNullable();
        table.integer('sender').notNullable();
        table.string('message').notNullable();
        table.timestamp('sent_at').defaultTo(knex.fn.now());

        table.foreign('order').references('id').inTable('orders');
        table.foreign('sender').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
};
