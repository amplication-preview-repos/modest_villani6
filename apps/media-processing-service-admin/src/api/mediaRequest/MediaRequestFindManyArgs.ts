import { MediaRequestWhereInput } from "./MediaRequestWhereInput";
import { MediaRequestOrderByInput } from "./MediaRequestOrderByInput";

export type MediaRequestFindManyArgs = {
  where?: MediaRequestWhereInput;
  orderBy?: Array<MediaRequestOrderByInput>;
  skip?: number;
  take?: number;
};
