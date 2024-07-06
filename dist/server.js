"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEV_SEQUELIZE = void 0;
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const mysql = __importStar(require("mysql2"));
//import {DEV_SEQUELIZE} from "../app/db/development";
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
exports.DEV_SEQUELIZE = new sequelize_1.Sequelize("battleship", "root", "", {
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
exports.DEV_SEQUELIZE.sync()
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
const battleship_route_1 = __importDefault(require("./routes/battleship.route"));
(0, battleship_route_1.default)(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
