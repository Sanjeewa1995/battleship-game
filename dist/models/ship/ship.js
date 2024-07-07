"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
class Ship extends sequelize_1.Model {
}
Ship.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    gameId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }, // position in the format "A1,A2,A3,A4,A5"
    size: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }, // size of the ship (e.g., 5 for Battleship, 4 for Destroyer)
}, {
    sequelize: db_1.default,
    paranoid: false,
    tableName: "ships",
    timestamps: true,
    underscored: true,
});
exports.default = Ship;
