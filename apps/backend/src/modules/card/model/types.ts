import { Schema } from "mongoose";

export interface Card {
  title: string;
  description: string;
  owner: Schema.Types.ObjectId;
  workStatus: string;
  cardOrder: number;
}
