const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  getShoppingList,
  getInstructions
}

function find() {
  return db('recipes')
}

function findById(id) {
  return db('recipes')
    .where({ id: id })
    .first();
}
/* 
select ingredient, recipe_name, amount from recipe_ingredients as ri
    JOIN ingredients as ing
        on ing.id = ri.ingredient_id
    JOIN recipes as rs
        on rs.id = ri.recipe_id

    WHERE rs.id = 1
*/
function getShoppingList(rec_id) {
  return db('recipe_ingredients')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .select('amount', 'ingredient', 'recipe_name')
    .where({ 'recipe_id': Number(rec_id) });

  /* .join('recipe_ingredients', 'ingredients.id', 'recipe_ingredietns.id')
  .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
  .where(`recipes.${rec_id}`, '=', `recipe_ingredients.${rec_id}`) */
}

function getInstructions(rec_id) {
  return db('steps')
    .join('recipes', 'recipes.id', 'steps.recipe_id')
    .select('step_number', 'instructions', 'recipe_name')
    .orderBy('step_number')
    .where({ 'recipes.id': Number(rec_id) })
}