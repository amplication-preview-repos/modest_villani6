import { InputJsonValue } from "../../types";

export type AudioCreateInput = {
  data?: InputJsonValue;
  duration?: number | null;
  format?: string | null;
  name?: string | null;
  size?: number | null;
  uploadedAt?: Date | null;
};
