// config/database.js
import { Sequelize } from 'sequelize';
import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DATABASE_URL
} = process.env;

const sequelize = new Sequelize(DATABASE_URL || {
  dialect: 'postgres',
  dialectModule: pg,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    // ... other configuration options for development
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    // ... other configuration options for production
  },
  // ... other environments
};

export { sequelize, Sequelize };
export default sequelize;
