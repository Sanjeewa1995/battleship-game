import express from "express";
import { Sequelize } from "sequelize";
import * as mysql from "mysql2";
//import {DEV_SEQUELIZE} from "../app/db/development";

const app = express();
const PORT = process.env.PORT || 3000;

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

// Import routes and attach them to the app
import battleshipRoutes from "./routes/battleship.route";
battleshipRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
