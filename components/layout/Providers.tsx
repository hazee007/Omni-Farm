"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/styles/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
