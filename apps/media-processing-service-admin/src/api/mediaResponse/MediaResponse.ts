import { JsonValue } from "type-fest";

export type MediaResponse = {
  createdAt: Date;
  id: string;
  message: string | null;
  processedData: JsonValue;
  status: string | null;
  updatedAt: Date;
};
