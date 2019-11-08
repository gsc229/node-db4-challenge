
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient: 'eggs' }, //1
    { ingredient: 'flour' }, //2
    { ingredient: 'milk' } //3
  ]);
};
