import { Sequelize } from 'sequelize';
import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

/** Destruct environment variable to get database configuration */
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

export default sequelize;
