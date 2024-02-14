import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT
} = process.env;

/** Initialize Sequelize connection */
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Add this line if you're getting SSL error
    }
  },
  timezone: '+07:00'
});

export default sequelize;