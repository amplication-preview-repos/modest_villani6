import { JsonValue } from "type-fest";

export type Image = {
  createdAt: Date;
  data: JsonValue;
  format: string | null;
  id: string;
  name: string | null;
  resolution: string | null;
  size: number | null;
  updatedAt: Date;
  uploadedAt: Date | null;
};
