import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StoryWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
