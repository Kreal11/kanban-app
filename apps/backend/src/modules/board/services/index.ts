import Board from "../model/boardSchema";
import handleCustomError from "../../../middlewares/helpers/handleCustomError";
import mongoose from "mongoose";

const getAllBoards = async () => {
  const data = await Board.find();
  if (!data) {
    throw handleCustomError(404, `Something went wrong`);
  }
  return data;
};

const getBoardById = async (id: string) => {
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
  if (!result) {
    throw handleCustomError(404, `Board with ID ${id} not found`);
  }
  return result;
};

const addBoard = async (boardData: any) => {
  const createdBoard = await Board.create({ ...boardData });
  if (!createdBoard) {
    throw handleCustomError(404, `Board was not created`);
  }
  return createdBoard;
};

const deleteBoard = async (id: string) => {
  const deletedBoard = await Board.findByIdAndDelete(id);
  if (!deletedBoard) {
    throw handleCustomError(404, `Board with ID ${id} not found`);
  }
  return deletedBoard;
};

const updateBoard = async (id: string, boardData: any) => {
  const updatedBoard = await Board.findByIdAndUpdate(id, boardData, {
    new: true,
  });
  if (!updatedBoard) {
    throw handleCustomError(404, `Board with ID ${id} not found`);
  }
  return updatedBoard;
};

export default {
  getAllBoards,
  getBoardById,
  addBoard,
  deleteBoard,
  updateBoard,
};
