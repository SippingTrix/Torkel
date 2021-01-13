
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('order_items').del()
      .then(function () {
        // Inserts seed entries
        return knex('order_items').insert([
          {id: 0, order: 0, item: 0, count: 4, special_instructions: 'Please order two without buns, and two with extra buns'},
          {id: 1, order: 0, item: 1, count: 5, special_instructions: 'Extra Mayo'},
          {id: 2, order: 0, item: 2, count: 2, special_instructions: 'Ask to put Chik-fila sauce in the lemonade'},
          {id: 3, order: 1, item: 3, count: 2, special_instructions: 'Extra onion and mustard'},
          {id: 4, order: 1, item: 4, count: 1, special_instructions: 'Have your fry cook spit in the shake'},
          {id: 5, order: 1, item: 5, count: 5, special_instructions: 'Make em extra crispy'},
          {id: 6, order: 1, item: 6, count: 4, special_instructions: 'Please burn this item I want it crispy'},
          {id: 7, order: 1, item: 7, count: 100, special_instructions: 'Turn your fryers to maximum overdrive and pop those guys out'},
          {id: 8, order: 2, item: 8, count: 5, special_instructions: 'Extra salt'},
          {id: 9, order: 2, item: 9, count: 3, special_instructions: 'Extra Chicken, have the sweatiest cook squeegee out their sweat into it'},
          {id: 10, order: 2, item: 10, count: 1, special_instructions: 'Brandon wants it twice the size, only paying for one though'},
          {id: 11, order: 2, item: 11, count: 5, special_instructions: 'Extra steak and extra rice'},
        ]);
      });
  };
  