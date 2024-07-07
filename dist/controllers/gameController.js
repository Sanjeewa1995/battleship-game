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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = exports.startGame = void 0;
const joi_1 = __importDefault(require("joi"));
const gameDal = __importStar(require("../dal/game.dal"));
const shipDal = __importStar(require("../dal/ship.dal"));
const moveDal = __importStar(require("../dal/move.dal"));
const helperFunctions_1 = require("../utils/helperFunctions");
const event_schema_1 = require("../utils/validation/event.schema");
const const_1 = require("../utils/const");
const startGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const { playerId } = joi_1.default.attempt(req.body, event_schema_1.startGameBodySchema);
        // Create new game
        const game = yield gameDal.startGame(playerId);
        (0, helperFunctions_1.setSuccessResponse)(res, game);
    }
    catch (error) {
        (0, helperFunctions_1.setErrorResponse)(res, 500, error !== null && error !== void 0 ? error : const_1.ERROR.GAME_START_FAILED);
    }
});
exports.startGame = startGame;
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { gameId } = req.params;
    const game = yield gameDal.getById(+gameId);
    if (!game) {
        (0, helperFunctions_1.setErrorResponse)(res, 404, const_1.ERROR.GAME_NOT_FOUND);
        return;
    }
    const ships = yield shipDal.getAllShips(+gameId);
    const moves = yield moveDal.getAllMoves(+gameId);
    (0, helperFunctions_1.setSuccessResponse)(res, { game, ships, moves });
});
exports.getStatus = getStatus;
