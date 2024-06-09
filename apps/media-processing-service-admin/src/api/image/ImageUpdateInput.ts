import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  data?: InputJsonValue;
  format?: string | null;
  name?: string | null;
  resolution?: string | null;
  size?: number | null;
  uploadedAt?: Date | null;
};
