exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("photo", 2048).alter(); // Increase the size to 2048 characters
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("photo", 255).alter(); // Revert to the previous size of 255 characters
  });
};
