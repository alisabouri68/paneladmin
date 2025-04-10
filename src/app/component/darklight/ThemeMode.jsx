"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UseThemeStore } from '@/app/store/Theme';



export default function ThemeMode({children}) {
  const {isDark  ,setIsDark}=UseThemeStore()
  const darkTheme = createTheme({
    palette: {
      mode: isDark?"dark":"light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}