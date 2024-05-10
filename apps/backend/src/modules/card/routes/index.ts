import express from "express";

import cardsController from "../controllers";
import { checkIsExist } from "../../../middlewares/decorators/checkIsExisted";

const cardsRouter = express.Router();

cardsRouter.get("/", cardsController.getAllCards);
cardsRouter.get(
  "/:id",
  checkIsExist("card", "params"),
  cardsController.getCardById
);

cardsRouter.post("/", cardsController.addCard);

cardsRouter.patch(
  "/",
  checkIsExist("card", "body"),
  cardsController.updateCard
);
cardsRouter.patch(
  "/workStatus",
  checkIsExist("card", "body"),
  cardsController.updateCardWorkStatus
);
cardsRouter.patch(
  "/cardOrder",
  checkIsExist("card", "body"),
  cardsController.updateCardOrder
);

cardsRouter.delete(
  "/",
  checkIsExist("card", "query"),
  cardsController.deleteCard
);

export default cardsRouter;
