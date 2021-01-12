exports.up = function(knex) {
    return knex.schema.createTable('runners', table => {
        table.increments('id').notNullable();
        table.integer('user_id').notNullable();
        table.integer('manager').notNullable();

        table.foreign('user_id').references('id').inTable('users');
        table.foreign('manager').references('id').inTable('runner_managers');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('runners');
};
