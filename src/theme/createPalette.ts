import purple from "./colors/purple";
import green from "./colors/green";
import { Palette } from "./types/palette";
import grey from "./colors/grey";
import yellow from "./colors/yellow";
import orange from "./colors/orange";
import red from "./colors/red";

const defaults = {
  light: {
    primary: {
      light: red["500"],
      main: red["700"],
      dark: red["900"],
    },
    secondary: {
      light: green["300"],
      main: green["500"],
      dark: green["700"],
    },
    info: {
      light: yellow["300"],
      main: yellow["500"],
      dark: yellow["700"],
    },
    warning: {
      light: orange["300"],
      main: orange["500"],
      dark: orange["700"],
    },
    error: {
      light: red["300"],
      main: red["500"],
      dark: red["700"],
    },
    grey,
  },
  dark: {
    primary: {
      light: red["200"],
      main: red["700"],
      dark: red["900"],
    },
    secondary: {
      light: green["500"],
      main: green["700"],
      dark: green["900"],
    },
    info: {
      light: green["500"],
      main: green["700"],
      dark: green["900"],
    },
    warning: {
      light: green["500"],
      main: green["700"],
      dark: green["900"],
    },
    error: {
      light: green["700"],
      main: green["800"],
      dark: green["900"],
    },
    grey,
  },
};

export const createPalette = (palette?: Partial<Palette>): Palette => {
  const mode = palette?.mode || "light";
  return {
    ...palette,
    mode,
    primary: palette?.primary || defaults[mode].primary,
    secondary: palette?.secondary || defaults[mode].secondary,
    info: palette?.info || defaults[mode].info,
    warning: palette?.warning || defaults[mode].warning,
    error: palette?.error || defaults[mode].error,
    grey: palette?.grey || defaults[mode].grey,
  };
};
