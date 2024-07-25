exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable().unique();
    table.specificType("problems_completed", "uuid[]").defaultTo("{}");
    table.boolean("is_admin").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
