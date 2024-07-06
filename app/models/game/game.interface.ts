import { Optional } from "sequelize";

export type GameInterface = {
  id: number;
  playerId: string;
  status: string;
};

export type GameInput = Optional<GameInterface, "id">;
export type GameOutput = Required<GameInterface>;
