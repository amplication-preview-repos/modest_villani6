import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  format?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  resolution?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
