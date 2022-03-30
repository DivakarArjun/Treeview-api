// import {Sequelize} from 'sequelize'
import { dbConfig } from '../database/connection';
const Sequelize = require('sequelize-hierarchy')();

export const sequelize = new Sequelize(dbConfig['DB'], dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
    });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err:any) => {
    console.error('Unable to connect to the database:', err);
  });