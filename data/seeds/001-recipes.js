
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'cookies' }, //1
    { recipe_name: 'cake' }, //2 
    { recipe_name: 'doughnuts' } //3 
  ]);
};
