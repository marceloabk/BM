import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
import sizes from "./styles/sizes";
import devices from "./styles/breakpoints";
import fonts from "./styles/fonts";

const theme = {
  colors,
  devices,
  sizes,
  fonts,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
