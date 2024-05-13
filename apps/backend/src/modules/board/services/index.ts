import Board from "../model";
import handleCustomError from "../../../middlewares/helpers/handleCustomError";
import mongoose from "mongoose";
import { BoardData } from "./types";

const getAllBoards = async (page = 1, limit = 10) => {
  const totalBoardsCount = await Board.countDocuments();

  const skip = (page - 1) * limit;

  const boards = await Board.find().skip(skip).limit(limit);
  const hasNextPage = totalBoardsCount > skip + boards.length;

  if (!boards) {
    throw handleCustomError(404, `Boards were not found`);
  }

  return { boards, hasNextPage, totalBoardsCount };
};

const getById = async (id: string) => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "cards",
        localField: "_id",
        foreignField: "owner",
        as: "cards",
      },
    },
  ];

  const result = await Board.aggregate(pipeline);

  return result;
};

const addBoard = async (boardData: BoardData) => {
  const createdBoard = await Board.create({ ...boardData });
  if (!createdBoard) {
    throw handleCustomError(404, `Board was not created`);
  }
  return createdBoard;
};

const deleteBoard = async (id: string) => {
  const deletedBoard = await Board.findByIdAndDelete(id);

  return deletedBoard;
};

const updateBoard = async (id: string, boardData: BoardData) => {
  const updatedBoard = await Board.findByIdAndUpdate(id, boardData, {
    new: true,
  });

  return updatedBoard;
};

export default {
  getAllBoards,
  getById,
  addBoard,
  deleteBoard,
  updateBoard,
};
