import { Request, Response } from "express";
import cardService from "../services/index";
import { handleRequestError } from "../../../middlewares/decorators/handleRequestError";

export const getAllCards = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = await cardService.getAllCards(id);
  return res.json({ data });
};

export const getCardById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const card = await cardService.getCardById(id);
  return res.json(card);
};

export const addCard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body = req.body;
  const createdCard = await cardService.addCard(body);
  return res.status(201).json(createdCard);
};

export const deleteCard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.query;
  if (typeof id !== "string") {
    return res.status(400).json({ message: `Card with ID ${id} not found` });
  }
  const deletedCard = await cardService.deleteCard(id);
  return res.json(deletedCard);
};

export const updateCard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.body;
  const body = req.body;
  const updatedCard = await cardService.updateCard(id, body);
  return res.json(updatedCard);
};

export const updateCardWorkStatus = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.body;
  const body = req.body;
  const updatedCardWorkStatus = await cardService.updateCardWorkStatus(
    id,
    body
  );
  return res.json(updatedCardWorkStatus);
};

export const updateCardOrder = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.body;
  const body = req.body;
  const updatedCardOrder = await cardService.updateCardOrder(id, body);
  return res.json(updatedCardOrder);
};

export default {
  getAllCards: handleRequestError(getAllCards),
  getCardById: handleRequestError(getCardById),
  addCard: handleRequestError(addCard),
  deleteCard: handleRequestError(deleteCard),
  updateCard: handleRequestError(updateCard),
  updateCardWorkStatus: handleRequestError(updateCardWorkStatus),
  updateCardOrder: handleRequestError(updateCardOrder),
};
