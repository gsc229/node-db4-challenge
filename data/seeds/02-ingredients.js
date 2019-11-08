
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'flour' },
        { id: 2, ingredient_name: 'egg' },
        { id: 3, ingredient_name: 'sugar' },
        { id: 3, ingredient_name: 'milk' },
        { id: 3, ingredient_name: 'butter' }
      ]);
    });
};
