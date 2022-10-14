import {
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export type Breakpoints = Record<"sm" | "md" | "lg" | "xl" | "xxl", string>;

export type Media = Record<
  keyof Breakpoints,
  (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
>;
