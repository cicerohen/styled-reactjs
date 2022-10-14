import { Mode } from "./theme";

export type PaletteVariant = {
  light: string;
  main: string;
  dark: string;
};

type PaletteScale = Record<
  "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
  string
>;

export type Palette = {
  mode: Mode;
  primary: PaletteVariant;
  secondary: PaletteVariant;
  info: PaletteVariant;
  warning: PaletteVariant;
  error: PaletteVariant;
  grey: PaletteScale;
};
