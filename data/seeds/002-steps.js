
exports.seed = function (knex) {
  return knex('steps').insert([
    { step_number: 1, recipe_id: 1, instructions: 'crack eggs' },
    { step_number: 2, recipe_id: 1, instructions: 'add flour' },
    { step_number: 3, recipe_id: 1, instructions: 'add milk' },
    { step_number: 1, recipe_id: 2, instructions: 'crack eggs' },
    { step_number: 2, recipe_id: 2, instructions: 'add flour' },
    { step_number: 3, recipe_id: 2, instructions: 'add milk' },
    { step_number: 1, recipe_id: 3, instructions: 'crack eggs' },
    { step_number: 2, recipe_id: 3, instructions: 'add flour' },
    { step_number: 3, recipe_id: 3, instructions: 'add milk' }
  ]);
};
