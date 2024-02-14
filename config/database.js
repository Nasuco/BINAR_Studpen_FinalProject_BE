/**
 * @file Manages database connection configuration.
 * @author BINAR_C7
 */

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

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
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  timezone: '+07:00',
});

module.exports = sequelize;