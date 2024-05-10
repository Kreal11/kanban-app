import { Request, Response } from "express";
import boardService from "../services";
import { handleRequestError } from "../../../middlewares/decorators/handleRequestError";

export const getAllBoards = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await boardService.getAllBoards();
  return res.json({ data });
};

export const getBoardById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const result = await boardService.getById(id);
  return res.json(...result);
};

export const addBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body = req.body;
  const createdBoard = await boardService.addBoard(body);
  return res.status(201).json(createdBoard);
};

export const deleteBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const deletedBoard = await boardService.deleteBoard(id);
  return res.json(deletedBoard);
};

export const updateBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.body;
  const body = req.body;
  const updatedBoard = await boardService.updateBoard(id, body);
  return res.json(updatedBoard);
};

export default {
  getAllBoards: handleRequestError(getAllBoards),
  getBoardById: handleRequestError(getBoardById),
  addBoard: handleRequestError(addBoard),
  deleteBoard: handleRequestError(deleteBoard),
  updateBoard: handleRequestError(updateBoard),
};
