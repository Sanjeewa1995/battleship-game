import { Optional } from "sequelize";

export type ShipInterface = {
  id: number;
  gameId: number;
  type: string;
  position: string;
  size: number;
};

export type ShipInput = Optional<ShipInterface, "id">;
export type ShipOutput = Required<ShipInterface>;
