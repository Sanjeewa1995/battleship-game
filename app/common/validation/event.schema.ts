import * as Joi from "joi";

export const startGameBodySchema: Joi.ObjectSchema = Joi.object({
  playerId: Joi.string().required(),
});
