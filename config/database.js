import { Sequelize } from 'sequelize';
import * as pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = process.env.DB_USERNAME,
  DB_PASSWORD = process.env.DB_PASSWORD,
  DB_HOST = process.env.DB_HOST,
  DB_NAME = process.env.DB_NAME,
  DB_PORT = process.env.DB_PORT
} = process.env;

/** Initialize Sequelize connection */
const sequelize = new Sequelize({
  dialect: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  dialectModule: pg,
  timezone: '+07:00',
});

export default sequelize;