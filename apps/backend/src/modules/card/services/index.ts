import Card from "../model";
import handleCustomError from "../../../middlewares/helpers/handleCustomError";
import { ICard } from "./types";

export const getAllCards = async (ownerId: string): Promise<ICard[]> => {
  const data = await Card.find({ owner: ownerId });
  if (!data) {
    throw handleCustomError(404, `Something went wrong`);
  }
  return data;
};

export const getCardById = async (id: string): Promise<ICard> => {
  const card = await Card.findById(id);
  if (!card) {
    throw handleCustomError(404, `Card with ID ${id} not found`);
  }
  return card;
};

export const addCard = async (cardData: any): Promise<ICard> => {
  const createdCard = await Card.create({ ...cardData });
  if (!createdCard) {
    throw handleCustomError(404, `Card was not created`);
  }
  return createdCard;
};

export const deleteCard = async (id: string): Promise<ICard> => {
  const deletedCard = await Card.findByIdAndDelete(id);
  if (!deletedCard) {
    throw handleCustomError(404, `Card with ID ${id} not found`);
  }
  return deletedCard;
};

export const updateCard = async (id: string, cardData: any): Promise<ICard> => {
  const updatedCard = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });
  if (!updatedCard) {
    throw handleCustomError(404, `Card with ID ${id} not found`);
  }
  return updatedCard;
};

export const updateCardWorkStatus = async (
  id: string,
  cardData: any
): Promise<ICard> => {
  const updatedCardWorkStatus = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });
  if (!updatedCardWorkStatus) {
    throw handleCustomError(404, `Card with ID ${id} not found`);
  }
  return updatedCardWorkStatus;
};

export const updateCardOrder = async (
  id: string,
  cardData: any
): Promise<ICard> => {
  const updatedCardOrder = await Card.findByIdAndUpdate(id, cardData, {
    new: true,
  });
  if (!updatedCardOrder) {
    throw handleCustomError(404, `Card with ID ${id} not found`);
  }
  return updatedCardOrder;
};

export default {
  getAllCards,
  getCardById,
  addCard,
  deleteCard,
  updateCard,
  updateCardWorkStatus,
  updateCardOrder,
};
