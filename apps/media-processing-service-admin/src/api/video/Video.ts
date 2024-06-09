import { JsonValue } from "type-fest";

export type Video = {
  createdAt: Date;
  data: JsonValue;
  duration: number | null;
  format: string | null;
  id: string;
  name: string | null;
  resolution: string | null;
  size: number | null;
  updatedAt: Date;
  uploadedAt: Date | null;
};
