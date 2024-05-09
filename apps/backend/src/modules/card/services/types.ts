import { Schema } from "mongoose";

export interface ICard {
  title: string;
  description: string;
  owner: Schema.Types.ObjectId;
  workStatus: string;
  cardOrder: number;
}
