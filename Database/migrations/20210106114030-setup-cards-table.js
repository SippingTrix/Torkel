exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments('id').notNullable();
        table.integer('runner').notNullable();
        table.integer('number').notNullable();
        table.string('expiration').notNullable();
        table.integer('csv').notNullable();
        table.integer('zipcode').notNullable();

    
        table.foreign('runner').references('id').inTable('runners');
        table.unique('number')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cards');
};
