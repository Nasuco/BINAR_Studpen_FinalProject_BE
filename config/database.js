// config/database.js

const { Pool } = require('pg');
require('dotenv').config();

const { POSTGRES_URL } = process.env;

module.exports = {
  development: {
    connectionString: `${POSTGRES_URL}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
  test: {
    connectionString: `${POSTGRES_URL}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
  production: {
    connectionString: `${POSTGRES_URL}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
};