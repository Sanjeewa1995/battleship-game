import { Sequelize } from "sequelize";
import * as mysql from "mysql2";

export const DEV_SEQUELIZE = new Sequelize("battleship", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql,
  logging: false,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 60000,
    evict: 1000,
  },
});
