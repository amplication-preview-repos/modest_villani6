import { SortOrder } from "../../util/SortOrder";

export type MediaResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  processedData?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
