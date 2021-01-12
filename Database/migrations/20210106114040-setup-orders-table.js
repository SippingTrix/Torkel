exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').notNullable();
        table.integer('runner').notNullable();
        table.integer('user').notNullable();
        table.string('status').notNullable();
        table.string('estimated_time').notNullable();
        table.string('dropoff_location').notNullable();
        table.float('total_cost').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.foreign('runner').references('id').inTable('runners');
        table.foreign('user').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
};
