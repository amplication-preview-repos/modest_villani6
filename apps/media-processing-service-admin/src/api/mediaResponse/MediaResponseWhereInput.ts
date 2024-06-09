import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MediaResponseWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  processedData?: JsonFilter;
  status?: StringNullableFilter;
};
