
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'eggs' }, //1
    { name: 'flour' }, //2
    { name: 'milk' } //3
  ]);
};
