
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('authorized_users').del()
      .then(function () {
        // Inserts seed entries
        return knex('authorized_users').insert([
          {id: 0, name: 'Colonel Mendoza', order_id: 1},
          {id: 1, name: 'Lt General Brown', order_id: 0},
          {id: 2, name: 'CMSGTAF Williams', order_id: 2},
        ]);
    });
};