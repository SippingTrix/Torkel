exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.boolean('is_banned').notNullable().defaultTo(false);

        table.unique('email');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
