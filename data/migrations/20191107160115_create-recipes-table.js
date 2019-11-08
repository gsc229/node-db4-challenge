exports.up = function (knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments(); // the type is integer w/o neg. values
    tbl.string('recipe_name', 255)
      .notNullable();
  })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')


      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')



      tbl.string('instructions', 255)
        .notNullable()
    })


    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 255)
        .notNullable()
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')

      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')

      tbl.float('amount')
        .notNullable()
    })

};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
