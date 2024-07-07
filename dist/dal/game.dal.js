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
exports.getById = exports.startGame = void 0;
const const_1 = require("../utils/const");
const game_1 = require("../models/game");
/**
 *
 * @param playerId - Id of the player
 * @returns {@returns GameOutput}
 *
 */
const startGame = (playerId) => {
    return game_1.Game.create({
        playerId: playerId,
        status: const_1.GAME_STATUS.IN_PROGRESS,
    });
};
exports.startGame = startGame;
/**
 *
 * @param gameId - Id of the game
 * @returns {@returns GameOutput}
 *
 */
const getById = (gameId) => __awaiter(void 0, void 0, void 0, function* () { return yield game_1.Game.findByPk(gameId); });
exports.getById = getById;
