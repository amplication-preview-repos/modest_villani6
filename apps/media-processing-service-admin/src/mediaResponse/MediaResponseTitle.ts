import { MediaResponse as TMediaResponse } from "../api/mediaResponse/MediaResponse";

export const MEDIARESPONSE_TITLE_FIELD = "status";

export const MediaResponseTitle = (record: TMediaResponse): string => {
  return record.status?.toString() || String(record.id);
};
