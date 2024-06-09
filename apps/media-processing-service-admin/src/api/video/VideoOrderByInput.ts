import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  duration?: SortOrder;
  format?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  resolution?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
