import { css } from "styled-components";

import { Breakpoints, Media } from "./types/media";

const defaultBreakpoints: Breakpoints = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  xxl: "screen and (min-width: 1536px)",
};

export const createMedia = (breakpoints?: Partial<Breakpoints>): Media => {
  const bp: Breakpoints = {
    ...defaultBreakpoints,
    ...breakpoints,
  };
  return Object.keys(bp).reduce((acc, curr) => {
    acc[curr as keyof Media] = (strings, ...interpolations) => css`
      @media ${(bp as any)[curr]} {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  }, {} as Media);
};
