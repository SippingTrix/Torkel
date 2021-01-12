
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('restraunts').del()
      .then(function () {
        // Inserts seed entries
        return knex('restraunts').insert([
          {id: 0, name: 'Chik-Fil-A', hours: '1100-1300L'},
          {id: 1, name: 'Burger King', hours: '0800-1800L'},
          {id: 2, name: 'Chipotle', hours: '0800-2300L'},
        ]);
      });
  };
  