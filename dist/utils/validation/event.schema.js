"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGameBodySchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.startGameBodySchema = joi_1.default.object({
    playerId: joi_1.default.string().required(),
});
