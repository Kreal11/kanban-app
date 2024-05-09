import { Controller } from "./types";
import { Request, Response, NextFunction } from "express";

export const handleRequestError = (
  ctrl: Controller
): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  const func = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      res.status(500).json({
        message: `Internal Server Error: ${error}`,
      });
    }
  };

  return func;
};
