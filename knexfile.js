const pg = require("pg");
if (process.env.PGSSLMODE !== "disable") {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/js_lists`,
  searchPath: "public",
  migrations: {
    directory: "./migrations"
  },
  // ssl: {
  //   require: true,
  //   rejectUnauthorized: false
  // }
};