import { Audio as TAudio } from "../api/audio/Audio";

export const AUDIO_TITLE_FIELD = "name";

export const AudioTitle = (record: TAudio): string => {
  return record.name?.toString() || String(record.id);
};
