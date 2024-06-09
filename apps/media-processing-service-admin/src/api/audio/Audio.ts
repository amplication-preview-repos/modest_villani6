import { JsonValue } from "type-fest";

export type Audio = {
  createdAt: Date;
  data: JsonValue;
  duration: number | null;
  format: string | null;
  id: string;
  name: string | null;
  size: number | null;
  updatedAt: Date;
  uploadedAt: Date | null;
};
