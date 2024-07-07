"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR = exports.GAME_STATUS = void 0;
exports.GAME_STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    FINISHED: "FINISHED",
};
exports.ERROR = {
    GAME_START_FAILED: "Failed to start the game",
    SHIP_POSITION_OVERLAP: "Positions overlap with existing ships",
    SHIP_PLACE_FAILED: "Failed to place the ship",
    SHOT_FAILED: "Failed shot",
    GAME_NOT_FOUND: "Game not found",
};
