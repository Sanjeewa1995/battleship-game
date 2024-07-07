import { GAME_STATUS } from "../utils/const";
import { Game, GameOutput } from "../models/game";

/**
 *
 * @param playerId - Id of the player
 * @returns {@returns GameOutput}
 *
 */
export const startGame = (playerId: string): Promise<GameOutput> => {
  return Game.create({
    playerId: playerId,
    status: GAME_STATUS.IN_PROGRESS,
  });
};

/**
 *
 * @param gameId - Id of the game
 * @returns {@returns GameOutput}
 *
 */
export const getById = async (gameId: number): Promise<GameOutput | null> =>
  await Game.findByPk(gameId);
