import "styled-components";

import { Theme } from "./theme/types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
