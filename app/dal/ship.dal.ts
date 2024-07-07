import { Ship, ShipOutput } from "../models/ship";

/**
 *
 * @param gameId - Id of the game
 * @param type - Type of the ship (BATTLESHIP or DESTROYER)
 * @param size - Size of the ship
 * @param position - Covered positions of the ship
 * @returns {@returns ShipOutput}
 *
 */
export const createShip = async (
  gameId: number,
  type: "BATTLESHIP" | "DESTROYER",
  size: number,
  position: string
): Promise<ShipOutput> => {
  return Ship.create({
    gameId,
    type,
    position,
    size,
  });
};

/**
 *
 * @param gameId - Id of the game
 * @returns {@returns ShipOutput[]}
 *
 */
export const getAllShips = (gameId: number): Promise<Ship[]> => {
  return Ship.findAll({
    where: {
      gameId: gameId,
    },
  });
};
