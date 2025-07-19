'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a stable theme that doesn't change during SSR/hydration
const muiTheme = createTheme({
  palette: {
    mode: 'light', // Fixed mode to prevent SSR mismatches
    primary: {
      main: '#16a34a',
    },
    secondary: {
      main: '#2563eb',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export default function MaterialUIProvider({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}