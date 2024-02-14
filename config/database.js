// config/database.js
import { Sequelize } from 'sequelize';
import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_PORT,
  POSTGRES_URL
} = process.env;

const sequelize = new Sequelize(POSTGRES_URL || {
  dialect: 'postgres',
  dialectModule: pg,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DATABASE,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  timezone: '+07:00'
});

module.exports = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
  test: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
  production: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
};

export { sequelize, Sequelize };
export default sequelize;
