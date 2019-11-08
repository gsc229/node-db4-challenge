
exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'cookies' }, //1
    { name: 'cake' }, //2 
    { name: 'doughnuts' } //3 
  ]);
};
