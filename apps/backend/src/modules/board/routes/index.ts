import express from "express";

import boardsController from "../controllers/index";
import { checkIsExist } from "../../../middlewares/decorators/checkIsExisted";
import validateBody from "../../../middlewares/decorators/validateBody";

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
