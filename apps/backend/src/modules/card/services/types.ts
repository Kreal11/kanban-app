import { Types } from "mongoose";

export interface CardData {
  title: string;
  description: string;
  owner: Types.ObjectId;
  workStatus: string;
  cardOrder: number;
}
