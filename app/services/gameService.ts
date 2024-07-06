import { GAME_STATUS } from "../common/const";
import { Game, GameOutput } from "../models/game";

class GameService {
  static async startGame(playerId: string): Promise<GameOutput> {
    return await Game.create({
      playerId: playerId,
      status: GAME_STATUS.IN_PROGRESS,
    });
  }

  //   static async placeShip(
  //     gameId: number,
  //     type: "BATTLESHIP" | "DESTROYER",
  //     size: number,
  //     coordinates: string[]
  //   ): Promise<void> {
  //     await db.placeShip(gameId, type, size, coordinates);
  //   }

  //   static async attack(gameId: number, coordinate: string): Promise<string> {
  //     const ships = await db.getShips(gameId);
  //     for (const ship of ships) {
  //       if (ship.coordinates.includes(coordinate)) {
  //         ship.hits += 1;
  //         await db.updateShipHits(ship.id, ship.hits);
  //         return ship.hits >= ship.size ? "Sunk" : "Hit";
  //       }
  //     }
  //     return "Miss";
  //   }

  //   static async getStatus(gameId: number): Promise<any> {
  //     const game = await db.getGame(gameId);
  //     const ships = await db.getShips(gameId);
  //     return { game, ships };
  //   }
}

export default GameService;
