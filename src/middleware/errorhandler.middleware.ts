import type { NextFunction, Request, Response } from "express";

import { StatusCodes } from "http-status-codes";
import { HttpError } from "../utils";

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(`${err instanceof HttpError ? err.code : 500} ${req.path} `);
  console.error(err);
  if (err instanceof HttpError) {
    res.status(err.code).json({ error: err.message });
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
};
