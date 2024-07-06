import { Request, Response } from "express";
import GameService from "../services/gameService";
import { setErrorResponse } from "../common/helperFunctions";
import Joi from "joi";
import { startGameBodySchema } from "../common/validation/event.schema";

export async function startGame(req: Request, res: Response) {
  try {
    const { playerId } = Joi.attempt(req.body, startGameBodySchema);
    const game = await GameService.startGame(playerId);
    res.json({
      success: true,
      data: game,
    });
  } catch (error) {
    setErrorResponse(res, 500, error ?? "Failed to start the game");
  }
}
