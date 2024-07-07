"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShips = exports.createShip = void 0;
const ship_1 = require("../models/ship");
/**
 *
 * @param gameId - Id of the game
 * @param type - Type of the ship (BATTLESHIP or DESTROYER)
 * @param size - Size of the ship
 * @param position - Covered positions of the ship
 * @returns {@returns ShipOutput}
 *
 */
const createShip = (gameId, type, size, position) => __awaiter(void 0, void 0, void 0, function* () {
    return ship_1.Ship.create({
        gameId,
        type,
        position,
        size,
    });
});
exports.createShip = createShip;
/**
 *
 * @param gameId - Id of the game
 * @returns {@returns ShipOutput[]}
 *
 */
const getAllShips = (gameId) => {
    return ship_1.Ship.findAll({
        where: {
            gameId: gameId,
        },
    });
};
exports.getAllShips = getAllShips;
