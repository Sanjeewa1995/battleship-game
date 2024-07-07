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
exports.placeShip = void 0;
const shipDal = __importStar(require("../dal/ship.dal"));
const helperFunctions_1 = require("../utils/helperFunctions");
const const_1 = require("../utils/const");
const placeShip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId, type, positions, size } = req.body;
        // Check for overlap with existing ships
        const existingShips = yield shipDal.getAllShips(+gameId);
        const existingPositions = existingShips.flatMap((ship) => ship.position.split(","));
        if (positions.split(',').some((pos) => existingPositions.includes(pos))) {
            (0, helperFunctions_1.setErrorResponse)(res, 500, const_1.ERROR.SHIP_POSITION_OVERLAP);
            return;
        }
        const ship = yield shipDal.createShip(+gameId, type, size, positions);
        (0, helperFunctions_1.setSuccessResponse)(res, ship);
    }
    catch (error) {
        (0, helperFunctions_1.setErrorResponse)(res, 500, error !== null && error !== void 0 ? error : const_1.ERROR.SHIP_PLACE_FAILED);
    }
});
exports.placeShip = placeShip;
