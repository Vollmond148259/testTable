import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#4f657a",
      light: "#ce93d8",
      dark: "#84263f",
    },
    secondary: {
      main: "#84263f",
      dark: "#ab47bc",
      light: "#f3e5f5",
    },

    background: {
      paper: "#ffffff",

      default: "#212B36",
      textField: "#f5f5f5",
      tooltip: "#4c557e",
    },
    text: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Montserrat",

    h1: {
      fontSize: 64,
      fontWeight: 300,
    },
    h2: {
      fontSize: 48,
      fontWeight: 300,
    },
    h3: {
      fontSize: 34,
      fontWeight: 300,
    },
    h4: {
      fontSize: 26,
      fontWeight: 300,
    },
    h5: {
      fontSize: 16,
      fontWeight: 300,
    },
    fatAddInfo: {
      fontSize: 13,
      fontWeight: 300,
    },
    addInfo: {
      fontSize: 13,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: "12px",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
