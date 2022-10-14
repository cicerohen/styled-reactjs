import { createTheme } from "./createTheme";
import { Mode, Theme } from "./types/theme";

export const themes: Record<Mode, Theme> = {
  light: createTheme(),
  dark: createTheme({ palette: { mode: "dark" } }),
};
