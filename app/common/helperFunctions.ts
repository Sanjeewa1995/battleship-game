import { Response } from "express";

export const setErrorResponse = (
  res: Response,
  statusCode: number,
  error?: any
): void => {
  let errorMessage = error;
  if (error instanceof Error) {
    errorMessage = error.message.replace('"', "").replace('"', "");
  }
  res.status(statusCode).json({
    success: false,
    data: null,
    errorMessage,
  });
};
