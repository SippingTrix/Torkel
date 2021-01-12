exports.up = function(knex) {
    return knex.schema.createTable('restraunts', table => {
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('hours').notNullable();

        table.unique('name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('restraunts');
};
