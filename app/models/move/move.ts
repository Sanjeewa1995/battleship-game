import { DataTypes, Model } from "sequelize";
import sequelize from "../../db";
import { MoveInput, MoveInterface, MoveOutput } from "./move.interface";

class Move extends Model<MoveOutput, MoveInput> implements MoveInterface {
  id!: number;
  gameId!: number;
  position!: string;
  result!: string;
}
Move.init(
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
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: false,
    tableName: "moves",
    timestamps: true,
    underscored: true,
  }
);

export default Move;
