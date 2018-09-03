
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
      table.increments()
      table.text("first_name")
      table.text("last_name")
      table.float("popularity")
      table.text("profession")
      table.text("create_at")
      table.text("modif_at")

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users")
  
};
