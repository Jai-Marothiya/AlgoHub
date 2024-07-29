exports.up = function (knex) {
  return knex.schema.createTable("user_problems", function (table) {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.integer("problem_id").notNullable();
    table.text("note");
    table.boolean("status").defaultTo(false);

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("NO ACTION")
      .onDelete("CASCADE");
    table
      .foreign("problem_id")
      .references("id")
      .inTable("problems")
      .onUpdate("NO ACTION")
      .onDelete("NO ACTION");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("notes");
};
