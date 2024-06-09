import { InputJsonValue } from "../../types";

export type VideoUpdateInput = {
  data?: InputJsonValue;
  duration?: number | null;
  format?: string | null;
  name?: string | null;
  resolution?: string | null;
  size?: number | null;
  uploadedAt?: Date | null;
};
