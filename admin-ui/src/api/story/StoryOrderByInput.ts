import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
