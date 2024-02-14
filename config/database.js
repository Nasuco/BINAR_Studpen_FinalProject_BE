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
