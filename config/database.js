// config/database.js

import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_URL
} = process.env;


module.exports = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    timezone: '+07:00',
  },
  test: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    timezone: '+07:00',
  },
  production: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    timezone: '+07:00',
  },
};
