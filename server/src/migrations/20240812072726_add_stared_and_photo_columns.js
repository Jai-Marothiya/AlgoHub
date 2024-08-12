exports.up = function (knex) {
  return knex.schema
    .alterTable("user_problems", function (table) {
      table.boolean("stared").defaultTo(false);
    })
    .alterTable("users", function (table) {
      table.string("photo").defaultTo(null);
    });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable("user_problems", function (table) {
      table.dropColumn("stared");
    })
    .alterTable("users", function (table) {
      table.dropColumn("photo");
    });
};
