import express from "express";

import boardsController from "../controllers";
import { checkIsExist } from "../../../middlewares/decorators/checkIsExisted";

const boardsRouter = express.Router();

boardsRouter.get("/", boardsController.getAllBoards);
boardsRouter.get(
  "/:id",
  checkIsExist("board", "params"),
  boardsController.getBoardById
);

boardsRouter.post("/", boardsController.addBoard);

boardsRouter.patch(
  "/",
  checkIsExist("board", "body"),
  boardsController.updateBoard
);

boardsRouter.delete(
  "/:id",
  checkIsExist("board", "params"),
  boardsController.deleteBoard
);

export default boardsRouter;
