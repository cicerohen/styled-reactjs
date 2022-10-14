import { Typography } from "./types/typography";

const round = (value: number) => {
  return Math.round(value * 1e5) / 1e5;
};

export const createTypography = (
  typography?: Partial<Typography>
): Typography => {
  const {
    fontSize = 14,
    htmlFontSize = 16,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
  } = typography || ({} as Typography);

  const coeficient = fontSize / 14;

  const pxToRem: Typography["pxToRem"] = (size) =>
    `${(size / htmlFontSize) * coeficient}rem`;

  const buildVariant = (
    fontWeight: number,
    size: number,
    lineHeight: number,
    letterSpacing: number
  ) => {
    return {
      fontWeight,
      fontSize: pxToRem(size),
      lineHeight,
      letterSpacing: `${round(letterSpacing / size)}rem`,
    };
  };

  return {
    htmlFontSize,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    pxToRem,
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1),
  };
};
