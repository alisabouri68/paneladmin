"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UseThemeStore } from '@/app/store/Theme';

export default function ThemeMode({ children }) {
  const { isDark } = UseThemeStore();

  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
    shadows: isDark ? [
      'none',
      '0px 2px 4px rgba(255, 255, 255, 0.1)',
      '0px 4px 8px rgba(255, 255, 255, 0.1)',
      '0px 6px 12px rgba(255, 255, 255, 0.1)',
    ] : createTheme().shadows,
    components: {
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: isDark ? '0px 2px 4px rgba(255, 255, 255, 0.1)' : undefined,
          },
          elevation2: {
            boxShadow: isDark ? '0px 4px 8px rgba(255, 255, 255, 0.1)' : undefined,
          },
        }
      }
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}