import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#7303e1",
    },
    secondary: {
      main: "#e10403",
    },
    tertiary: {
      main: "#71e103",
    },
    background: "#01020e",
  },
  typography: {
    fontFamily:
      "Jersey15Charted, SUSE, Roboto, LilitaOne, Roboto-medium, sans-serif",

    h2: {
      fontFamily: '"SUSE", "Open-Sans"',
      color: "#ccc",
      fontWeight: 700,
    },

    h5: {
      fontFamily: '"Jersey15Charted", "Open-Sans"',

      color: "#ccc",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "LilitaOne",
      color: "#ccc",
    },
    body1: {
      fontFamily: '"LilitaOne"',
      color: "#ccc",
    },
    body2: {
      fontFamily: '"LilitaOne"',
      color: "#ccc",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
