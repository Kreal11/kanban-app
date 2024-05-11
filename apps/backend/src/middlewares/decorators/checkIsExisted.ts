import boardService from "../../modules/board/services";
import cardService from "../../modules/card/services";
import { NextFunction, Request, Response } from "express";

const services = {
  board: boardService,
  card: cardService,
};

type Services = typeof services;

export const checkIsExist =
  (serviceName: keyof Services, idSource: keyof Request) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    const { id } = req[idSource];

    try {
      const service = services[serviceName];

      if (!service) {
        return res
          .status(500)
          .json({ message: `Service ${serviceName} not found` });
      }

      const entity = await service.getById(id);

      if (!entity) {
        return res
          .status(404)
          .json({ message: `${serviceName} with ID ${id} not found` });
      }

      if (Array.isArray(entity) && !entity.length) {
        return res
          .status(404)
          .json({ message: `${serviceName} with ID ${id} not found` });
      }

      next();
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Internal Server Error: ${error}` });
    }
  };
