exports.up = function (knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments(); // the type is integer w/o neg. values
    tbl.string('recipe_name', 255)
      .notNullable();
  })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 255)
        .notNullable()
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.string('instructions', 255)
        .notNullable()
        .unique()
      tbl.integer('step_number')
        .unique()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') // could be 'RESTRICT', 'NO ACTION', 'NOT NULL'
        .onUpdate('CASCADE')
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') // could be 'RESTRICT', 'NO ACTION', 'NOT NULL'
        .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT') // could be 'RESTRICT', 'NO ACTION', 'NOT NULL'
        .onUpdate('CASCADE')
      tbl.float('amount')
        .notNullable()
    })

};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
