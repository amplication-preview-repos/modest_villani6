import { MediaRequest as TMediaRequest } from "../api/mediaRequest/MediaRequest";

export const MEDIAREQUEST_TITLE_FIELD = "typeField";

export const MediaRequestTitle = (record: TMediaRequest): string => {
  return record.typeField?.toString() || String(record.id);
};
