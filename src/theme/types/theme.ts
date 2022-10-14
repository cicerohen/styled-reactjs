import { Palette } from "./palette";
import { Media } from "./media";
import { Typography } from "./typography";
import { Layout } from "./layout";

export type Mode = "light" | "dark";

export type Theme = {
  palette: Palette;
  media: Media;
  typography: Typography;
  layout: Layout;
};
