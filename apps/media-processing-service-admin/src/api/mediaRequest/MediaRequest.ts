import { JsonValue } from "type-fest";

export type MediaRequest = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
