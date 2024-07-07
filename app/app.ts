import express, { Application } from "express";
import { Sequelize } from "sequelize";
import * as mysql from "mysql2";
//import { DEV_SEQUELIZE } from "../app/db/development";

import gameRoutes from "./routes/game.routes";
import shipRoutes from "./routes/ship.routes";
import moveRoutes from "./routes/move.routes";

const app: Application = express();

app.use(express.json());

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

// Sync DB from sequelize orm
DEV_SEQUELIZE.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to battleship application." });
});

// Attach routes to the app
gameRoutes(app);
shipRoutes(app);
moveRoutes(app);

export default app;
