import { Media } from "./types/media";

const defaultMedia: Media = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  xxl: "screen and (min-width: 1536px)",
};

export const createMedia = (media?: Partial<Media>): Media => {
  return {
    ...defaultMedia,
    ...media,
  };
};
