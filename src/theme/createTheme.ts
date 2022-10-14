import { createMedia } from "./createMedia";
import { createPalette } from "./createPalette";
import { createTypography } from "./createTypography";
import { createLayout } from "./createLayout";

import { Theme } from "./types/theme";
import { Palette } from "./types/palette";
import { Breakpoints } from "./types/media";
import { Typography } from "./types/typography";

export const createTheme = (
  options?: Partial<{
    palette: Partial<Palette>;
    breakpoints: Partial<Breakpoints>;
    typography: Partial<Typography>;
  }>
): Theme => {
  return {
    palette: createPalette(options?.palette),
    media: createMedia(options?.breakpoints),
    typography: createTypography(options?.typography),
    layout: createLayout(),
  };
};
