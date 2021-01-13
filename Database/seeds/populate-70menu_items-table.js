
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('menu_items').del()
      .then(function () {
        // Inserts seed entries
        return knex('menu_items').insert([
          {id: 0, restraunt: 0, name: 'Chicken Sandwich', price: 3.50, description: 'A beautifully layered chicken fries with peanut oil over soft bus', picture_path: 'ChickySandy'},
          {id: 1, restraunt: 0, name: 'Waffle Fries', price: 2.99, description: 'Large Fries', picture_path: 'WaffleFries'},
          {id: 2, restraunt: 0, name: 'Lemonade', price: 1.50, description: 'Crisp freshly squeezed dew from the gods', picture_path: 'Lemonade'},
          {id: 3, restraunt: 1, name: 'Deluxe Whopper', price: 2.99, description: 'For those who dare', picture_path: 'DWhopper'},
          {id: 4, restraunt: 1, name: 'Chocolate Shakes', price: 1.99, description: 'Chocolatey goodness, thicc but only 2 cs', picture_path: 'ChoccyShake'},
          {id: 5, restraunt: 1, name: 'French Fries', price: 1, description: 'Dollar Menu Smol fries', picture_path: 'FrenchFie'},
          {id: 6, restraunt: 1, name: 'Apple Pies', price: 1, description: '2 Crisply microwaves apple pies', picture_path: 'ApplePie'},
          {id: 7, restraunt: 1, name: 'Whopper Jr.', price: 1, description: 'The bebey whopper', picture_path: 'WhopperJr'},
          {id: 8, restraunt: 2, name: 'Chips & Guac', price: 3.00, description: 'Lots of guacc', picture_path: 'Chips'},
          {id: 9, restraunt: 2, name: 'Chicken Bowl', price: 4.00, description: 'Chicken, Rice, Beans, and more!', picture_path: 'CBowl'},
          {id: 10, restraunt: 2, name: 'Veggie Bowl', price: 100.00, description: 'Marked up just for you brandon', picture_path: 'VBowl'},
          {id: 11, restraunt: 2, name: 'Steak Burrito', price: 5.00, description: 'Steak... and more Steak.... and more Steak!!!', picture_path: 'Burrito'},
        ]);
      });
  };
  