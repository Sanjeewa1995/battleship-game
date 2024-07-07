import { Optional } from "sequelize";

export type MoveInterface = {
  id: number;
  gameId: number;
  position: string;
  result: string;
};

export type MoveInput = Optional<MoveInterface, "id">;
export type MoveOutput = Required<MoveInterface>;
