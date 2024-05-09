import { Schema, model } from "mongoose";
import handleMongooseError from "../../../middlewares/helpers/handleMongooseError";
import { Board } from "./types";

const boardSchema = new Schema<Board>(
  {
    title: {
      type: String,
      required: [true, "Set title for board"],
      unique: true,
    },
    theme: {
      type: String,
      required: [true, "Set theme for board"],
    },
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post("save", handleMongooseError);

const Board = model("board", boardSchema);

export default Board;
