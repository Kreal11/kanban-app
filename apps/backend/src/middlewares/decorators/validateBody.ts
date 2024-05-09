import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";

import httpError from "../helpers/handleCustomError";

const validateBody = <T>(schema: Schema<T>) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(httpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
