import { Move, MoveOutput } from "../models/move";

/**
 *
 * @param gameId - Id of the game
 * @param result - Result of the shot (HIT or MISS)
 * @param position - Target position of the shot
 * @returns {@returns MoveOutput}
 *
 */
export const createMove = async (
  gameId: number,
  result: string,
  position: string
): Promise<MoveOutput> => {
  return Move.create({
    gameId,
    result,
    position,
  });
};

/**
 *
 * @param gameId - Id of the game
 * @returns {@returns MoveOutput[]}
 *
 */
export const getAllMoves = (gameId: number): Promise<MoveOutput[]> => {
  return Move.findAll({
    where: {
      gameId: gameId,
    },
  });
};
