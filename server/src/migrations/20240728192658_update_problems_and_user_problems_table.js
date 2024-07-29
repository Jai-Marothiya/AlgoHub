exports.up = function (knex) {
  return knex.schema
    .table("user_problems", function (table) {
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .table("problems", function (table) {
      table.unique("problem_desc");
    });
};

exports.down = function (knex) {
  return knex.schema
    .table("user_problems", function (table) {
      table.dropColumn("created_at");
    })
    .table("problems", function (table) {
      table.dropUnique("problem_desc");
    });
};
