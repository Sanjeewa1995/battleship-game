import { Request, Response } from "express";

import * as moveDal from "../dal/move.dal";
import * as shipDal from "../dal/ship.dal";
import { setErrorResponse, setSuccessResponse } from "../utils/helperFunctions";
import { ERROR } from "../utils/const";

export const makeMove = async (req: Request, res: Response) => {
  try {
    const { gameId } = req.params;
    const { position } = req.body;

    const moveResult = await processMove(+gameId, position);
    const move = await moveDal.createMove(+gameId, moveResult, position);

    setSuccessResponse(res, move);
  } catch (error) {
    setErrorResponse(res, 500, error ?? ERROR.SHOT_FAILED);
  }
};


const processMove = async (
  gameId: number,
  position: string
): Promise<string> => {
  const ships = await shipDal.getAllShips(+gameId);
  for (const ship of ships) {
    const shipPositions = ship.position.split(",");
    if (shipPositions.includes(position)) {
      shipPositions.splice(shipPositions.indexOf(position), 1);
      if (shipPositions.length === 0) {
        await ship.destroy();
        return "sunk";
      } else {
        ship.position = shipPositions.join(",");
        await ship.save();
        return "hit";
      }
    }
  }
  return "miss";
};
