import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "title";

export const StoryTitle = (record: TStory): string => {
  return record.title || String(record.id);
};
