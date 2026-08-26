import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2E7D32", dark: "#1B5E20", light: "#81C784" },
    secondary: { main: "#FFC107" },
    text: { primary: "#1F2937" },
    background: { default: "#F8F9FA", paper: "#FFFFFF" },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 },
    h2: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 },
    h3: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 },
    h4: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
  },
});

export default theme;
