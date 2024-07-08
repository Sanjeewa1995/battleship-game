import Joi from "joi";

export const startGameBodySchema: Joi.ObjectSchema = Joi.object({
  playerId: Joi.string().required(),
});

export const createShipBodySchem: Joi.ObjectSchema = Joi.object({
  gameId: Joi.string().required(),
  type: Joi.string().required().valid("BATTLESHIP","DESTROYER"),
  positions: Joi.string().required(),
  size: Joi.string().required(),
});
