import { NextFunction, Request, Response } from "express";

export const catchAsyncErrors = (
  middleware: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
