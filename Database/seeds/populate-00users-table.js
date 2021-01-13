
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {id: 0, first_name: 'MSgt', last_name: 'HasCool', password: 'password', email: 'msgt@gmail.com'},
          {id: 1, first_name: 'SSgt', last_name: 'RetiredE4Mafia', password: 'password', email: 'ssgt@gmail.com'},
          {id: 2, first_name: 'Amn', last_name: 'Snuffy', password: 'password', email: 'amn@gmail.com'},
        ]);
      });
  };
  