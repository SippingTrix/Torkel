
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('messages').del()
      .then(function () {
        // Inserts seed entries
        return knex('messages').insert([
          {id: 0, order: 0, sender: 1, message: 'when IS MY FOOD GETTING HERE!!!'},
          {id: 1, order: 0, sender: 2, message: 'ITS COMING IM ALMOST BACK!!!'},
        ]);
      });
  };
  