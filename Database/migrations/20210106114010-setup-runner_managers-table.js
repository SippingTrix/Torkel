
exports.up = function(knex) {
    return knex.schema.createTable('runner_managers', table => {
        table.increments('id').notNullable();
        table.integer('user_id').notNullable();
        table.string('venmo_username').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('runner_managers');
};
