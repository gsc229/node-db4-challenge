
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, instructions: 'add eggs', step_number: 1, recipe_id: 1, },
        { id: 2, instructions: 'add milk', step_number: 1, recipe_id: 2, },
        { id: 3, instructions: 'add flour', step_number: 1, recipe_id: 3, }
      ]);
    });
};
