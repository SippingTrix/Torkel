
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('orders').del()
      .then(function () {
        // Inserts seed entries
        return knex('orders').insert([
          {id: 0, runner: 0, user: 1, status: 'open', estimated_time: '1100L', dropoff_location: 'The Commissary', total_cost: 40},
          {id: 1, runner: 0, user: 1, status: 'closed', estimated_time: '1100L', dropoff_location: 'The Commissary', total_cost: 30},
          {id: 2, runner: 0, user: 1, status: 'closed', estimated_time: '1100L', dropoff_location: 'The Commissary', total_cost: 20},
        ]);
      });
  };
  