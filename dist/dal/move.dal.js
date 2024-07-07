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
exports.getAllMoves = exports.createMove = void 0;
const move_1 = require("../models/move");
/**
 *
 * @param gameId - Id of the game
 * @param result - Result of the shot (HIT or MISS)
 * @param position - Target position of the shot
 * @returns {@returns MoveOutput}
 *
 */
const createMove = (gameId, result, position) => __awaiter(void 0, void 0, void 0, function* () {
    return move_1.Move.create({
        gameId,
        result,
        position,
    });
});
exports.createMove = createMove;
/**
 *
 * @param gameId - Id of the game
 * @returns {@returns MoveOutput[]}
 *
 */
const getAllMoves = (gameId) => {
    return move_1.Move.findAll({
        where: {
            gameId: gameId,
        },
    });
};
exports.getAllMoves = getAllMoves;
