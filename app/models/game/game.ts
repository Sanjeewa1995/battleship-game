import { DataTypes, Model } from "sequelize";
import { GameInput, GameInterface, GameOutput } from ".";

import sequelize from "../../db";

class Game extends Model<GameOutput, GameInput> implements GameInterface {
  id!: number;
  playerId!: string;
  status!: string;
}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: false,
    tableName: "games",
    timestamps: true,
    underscored: true,
  }
);

export default Game;
