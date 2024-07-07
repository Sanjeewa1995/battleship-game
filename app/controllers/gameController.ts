import { Request, Response } from "express";
import Joi from "joi";
import * as gameDal from "../dal/game.dal";
import * as shipDal from "../dal/ship.dal";
import * as moveDal from "../dal/move.dal";

import { setErrorResponse, setSuccessResponse } from "../utils/helperFunctions";
import { startGameBodySchema } from "../utils/validation/event.schema";
import { ERROR } from "../utils/const";

export const startGame = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const { playerId } = Joi.attempt(req.body, startGameBodySchema);

    // Create new game
    const game = await gameDal.startGame(playerId);

    setSuccessResponse(res, game);
  } catch (error) {
    setErrorResponse(res, 500, error ?? ERROR.GAME_START_FAILED);
  }
};

export const getStatus = async (req: Request, res: Response) => {
  const { gameId } = req.params;
  const game = await gameDal.getById(+gameId);
  if (!game) {
    setErrorResponse(res, 404, ERROR.GAME_NOT_FOUND);
    return;
  }
  const ships = await shipDal.getAllShips(+gameId);
  const moves = await moveDal.getAllMoves(+gameId);
  setSuccessResponse(res, { game, ships, moves });
};
