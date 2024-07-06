import { GAME_STATUS } from "../utils/const";
import { Game, GameOutput } from "../models/game";

export const startGame = (playerId: string): Promise<GameOutput> => {
  return Game.create({
    playerId: playerId,
    status: GAME_STATUS.IN_PROGRESS,
  });
};
