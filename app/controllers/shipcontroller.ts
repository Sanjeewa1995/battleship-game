import { Request, Response } from "express";
import Joi from "joi";
import * as shipDal from "../dal/ship.dal";

import { setErrorResponse, setSuccessResponse } from "../utils/helperFunctions";
import { ERROR } from "../utils/const";

export const placeShip = async (req: Request, res: Response): Promise<void> => {
  try {
    const { gameId, type, positions, size } = req.body;

    // Check for overlap with existing ships
    const existingShips = await shipDal.getAllShips(+gameId);
    const existingPositions = existingShips.flatMap((ship) =>
      ship.position.split(",")
    );
    if (positions.split(',').some((pos: string) => existingPositions.includes(pos))) {
      setErrorResponse(res, 500, ERROR.SHIP_POSITION_OVERLAP);
      return;
    }
    const ship = await shipDal.createShip(+gameId, type, size, positions);

    setSuccessResponse(res, ship);
  } catch (error) {
    setErrorResponse(res, 500, error ?? ERROR.SHIP_PLACE_FAILED);
  }
};
