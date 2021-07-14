const dotEnv = require("dotenv").config();

console.log(dotEnv);

const database = dotEnv.parsed.DB_NAME;
const username = dotEnv.parsed.DB_USER;
const password = dotEnv.parsed.DB_PASS;
const host = dotEnv.parsed.DB_HOST;
const port = dotEnv.parsed.DB_PORT;

console.log(database + ", " + username + ", " + password + ", " + host + ", " + port + ", " );

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    port: port,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: username,
    password: password,
    database: database,
    host: host,
    port: port,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: username,
    password: password,
    database: database,
    host: host,
    port: port,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
