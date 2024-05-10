import Board from "../model";
import handleCustomError from "../../../middlewares/helpers/handleCustomError";
import mongoose from "mongoose";

const getAllBoards = async () => {
  const data = await Board.find();
  if (!data) {
    throw handleCustomError(404, `Boards were not found`);
  }
  return data;
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

const addBoard = async (boardData: any) => {
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

const updateBoard = async (id: string, boardData: any) => {
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
