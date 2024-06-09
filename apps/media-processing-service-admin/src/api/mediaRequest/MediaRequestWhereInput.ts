import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaRequestWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
