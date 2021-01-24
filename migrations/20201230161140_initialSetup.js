
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("lists", (table) => {
        table.increments().index();
        table.text("title");
        table.text("description")
        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at");
        table.timestamp("deleted_at");
      })
      .createTable("items", (table) => {
        table.increments().index();
        table.text("title");
        table.text("description");
        table.text("url");
        table.integer("list_id")
          .references("id")
          .inTable("lists");
        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at");
        table.timestamp("deleted_at");
          
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("items")
    .dropTable("lists");
};
