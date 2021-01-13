
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('runners').del()
      .then(function () {
        // Inserts seed entries
        return knex('runners').insert([
            {id: 0, user_id: 2, manager: 0},
        ]);
      });
  };
  