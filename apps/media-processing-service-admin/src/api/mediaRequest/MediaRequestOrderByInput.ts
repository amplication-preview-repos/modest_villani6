import { SortOrder } from "../../util/SortOrder";

export type MediaRequestOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
