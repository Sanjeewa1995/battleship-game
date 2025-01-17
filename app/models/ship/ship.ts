import { DataTypes, Model } from "sequelize";
import { ShipInput, ShipInterface, ShipOutput } from "./ship.interface";

import sequelize from "../../db";

class Ship extends Model<ShipOutput, ShipInput> implements ShipInterface {
  id!: number;
  gameId!: number;
  type!: string;
  position!: string;
  size!: number;
}
Ship.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // position in the format "A1,A2,A3,A4,A5"
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, // size of the ship (e.g., 5 for Battleship, 4 for Destroyer)
  },
  {
    sequelize,
    paranoid: false,
    tableName: "ships",
    timestamps: true,
    underscored: true,
  }
);

export default Ship;
