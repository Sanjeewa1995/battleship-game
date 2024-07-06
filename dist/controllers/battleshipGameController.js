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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = startGame;
const gameService_1 = __importDefault(require("../services/gameService"));
const helperFunctions_1 = require("../common/helperFunctions");
const joi_1 = __importDefault(require("joi"));
const event_schema_1 = require("../common/validation/event.schema");
function startGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { playerId } = joi_1.default.attempt(req.body, event_schema_1.startGameBodySchema);
            const game = yield gameService_1.default.startGame(playerId);
            res.json({
                success: true,
                data: game,
            });
        }
        catch (error) {
            (0, helperFunctions_1.setErrorResponse)(res, 500, error !== null && error !== void 0 ? error : "Failed to start the game");
        }
    });
}
