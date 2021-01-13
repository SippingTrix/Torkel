
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cards').del()
      .then(function () {
        // Inserts seed entries
        return knex('cards').insert([
            {id: 0, runner: 0, number: 3390213, expiration: '02/22', csv: 0, zipcode: 33092},
        ]);
      });
  };
  