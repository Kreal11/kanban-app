import Card from "../model";
import handleCustomError from "../../../middlewares/helpers/handleCustomError";
import { ICard } from "../model/types";
import { CardData } from "./types";

export const getById = async (id: string): Promise<ICard | null> => {
  const card = await Card.findById(id);

  return card;
};

export const addCard = async (cardData: CardData): Promise<ICard> => {
  const createdCard = await Card.create({ ...cardData });
  if (!createdCard) {
    throw handleCustomError(404, `Card was not created`);
  }
  return createdCard;
};

export const deleteCard = async (id: string): Promise<ICard | null> => {
  const deletedCard = await Card.findByIdAndDelete(id);

  return deletedCard;
};

export const updateCard = async (
  id: string,
  cardData: CardData
): Promise<ICard | null> => {
  const updatedCard = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });

  return updatedCard;
};

export const updateCardWorkStatus = async (
  id: string,
  cardData: CardData
): Promise<ICard | null> => {
  const updatedCardWorkStatus = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });

  return updatedCardWorkStatus;
};

export const updateCardOrder = async (
  id: string,
  cardData: CardData
): Promise<ICard | null> => {
  const updatedCardOrder = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });

  return updatedCardOrder;
};

export default {
  getById,
  addCard,
  deleteCard,
  updateCard,
  updateCardWorkStatus,
  updateCardOrder,
};
