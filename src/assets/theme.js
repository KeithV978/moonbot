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
      "Roboto, Roboto-medium, Jersey15Charted, SUSE, LilitaOne, Open-Sans",

    h2: {
      fontFamily: '"LilitaOne", "Open-Sans"',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"SUSE", "Open-Sans"',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"SUSE", "Open-Sans"',
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Roboto",
    },
    body1: {
      fontFamily: '"Roboto"',
    },
    body2: {
      fontFamily: '"Roboto"',
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
