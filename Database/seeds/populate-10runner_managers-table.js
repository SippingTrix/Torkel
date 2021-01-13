
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('runner_managers').del()
      .then(function () {
        // Inserts seed entries
        return knex('runner_managers').insert([
            {id: 0, user_id: 0, venmo_username: 'msgt@gmail.com'},
        ]);
      });
  };
  