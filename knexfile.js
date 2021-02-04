module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL + "?sslmode=require" ||
    `postgres://${process.env.USER}@127.0.0.1:5432/js_lists`,
  searchPath: "public",
  migrations: {
    directory: "./migrations",
  },
  ssl: { rejectUnauthorized: false }
};