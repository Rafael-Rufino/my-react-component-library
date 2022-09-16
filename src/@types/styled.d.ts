import "styled-components";
import theme from "../components/styles/themes";


declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}