// config/database.js
import { Sequelize } from 'sequelize';
import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL || {
  dialect: 'postgres',
  dialectModule: pg,
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
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    timezone: '+07:00',
  },
};

export { sequelize, Sequelize };
export default sequelize;
