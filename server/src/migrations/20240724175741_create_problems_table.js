exports.up = function (knex) {
  return knex.schema.createTable("problems", function (table) {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.text("problem_desc").notNullable();
    table.text("problem_url").notNullable();
    table.specificType("problem_tags", "text[]");
    table.string("platform", 255).notNullable();
    table.string("problem_level", 255).notNullable();
    table.uuid("uploaded_by").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table
      .foreign("uploaded_by")
      .references("id")
      .inTable("users")
      .onUpdate("NO ACTION")
      .onDelete("NO ACTION");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("problems");
};
