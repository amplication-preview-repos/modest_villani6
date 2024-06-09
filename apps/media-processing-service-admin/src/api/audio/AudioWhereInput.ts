import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AudioWhereInput = {
  data?: JsonFilter;
  duration?: IntNullableFilter;
  format?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  size?: IntNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
};
