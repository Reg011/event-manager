const { Pool } = require("pg"); // great pg feature

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: 5432,
});

pool.on("error", async (err, client) => {
  console.error("Unexpected error on client", err, client);
  process.exit(-1);
});

process.on("exit", () => pool.end());

module.exports = {
  pool,
};
