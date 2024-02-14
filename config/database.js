// config/database.js

const { Pool } = require('pg');
require('dotenv').config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_URL
} = process.env;

module.exports = {
  development: {
    connectionString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
  test: {
    connectionString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
  production: {
    connectionString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}?sslmode=require`,
    dialect: "postgres",
    dialectModule: Pool,
    timezone: '+07:00',
  },
};
