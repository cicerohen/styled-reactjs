import { createMedia } from "./createMedia";
import { createPalette } from "./createPalette";
import { createTypography } from "./createTypography";
import { createLayout } from "./createLayout";

import { Theme } from "./types/theme";
import { Palette } from "./types/palette";
import { Media } from "./types/media";
import { Typography } from "./types/typography";

export const createTheme = (
  options?: Partial<{
    palette: Partial<Palette>;
    media: Partial<Media>;
    typography: Partial<Typography>;
  }>
): Theme => {
  return {
    palette: createPalette(options?.palette),
    media: createMedia(options?.media),
    typography: createTypography(options?.typography),
    layout: createLayout(),
  };
};
