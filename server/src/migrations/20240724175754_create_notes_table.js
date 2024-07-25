exports.up = function (knex) {
  return knex.schema.createTable("notes", function (table) {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.uuid("user_id").notNullable();
    table.uuid("problem_id").notNullable();
    table.text("note");

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
