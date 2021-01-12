
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {id: 0, first_name: 'me', last_name: 'you', password: 'password', email: 'me@gmail.com'},
        ]);
      });
  };
  