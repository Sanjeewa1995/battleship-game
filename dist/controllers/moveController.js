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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMove = void 0;
const moveDal = __importStar(require("../dal/move.dal"));
const shipDal = __importStar(require("../dal/ship.dal"));
const helperFunctions_1 = require("../utils/helperFunctions");
const const_1 = require("../utils/const");
const makeMove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId, position } = req.body;
        const moveResult = yield processMove(+gameId, position);
        const move = yield moveDal.createMove(+gameId, moveResult, position);
        (0, helperFunctions_1.setSuccessResponse)(res, move);
    }
    catch (error) {
        (0, helperFunctions_1.setErrorResponse)(res, 500, error !== null && error !== void 0 ? error : const_1.ERROR.SHOT_FAILED);
    }
});
exports.makeMove = makeMove;
const processMove = (gameId, position) => __awaiter(void 0, void 0, void 0, function* () {
    const ships = yield shipDal.getAllShips(+gameId);
    for (const ship of ships) {
        const shipPositions = ship.position.split(",");
        if (shipPositions.includes(position)) {
            shipPositions.splice(shipPositions.indexOf(position), 1);
            if (shipPositions.length === 0) {
                yield ship.destroy();
                return "sunk";
            }
            else {
                ship.position = shipPositions.join(",");
                yield ship.save();
                return "hit";
            }
        }
    }
    return "miss";
});
