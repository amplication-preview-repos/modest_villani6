import { SortOrder } from "../../util/SortOrder";

export type AudioOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  duration?: SortOrder;
  format?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
