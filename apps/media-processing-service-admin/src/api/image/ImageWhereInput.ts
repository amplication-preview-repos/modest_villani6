import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageWhereInput = {
  data?: JsonFilter;
  format?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  resolution?: StringNullableFilter;
  size?: IntNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
};
