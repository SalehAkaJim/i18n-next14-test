import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, pinkTheme, darkTheme } from '../../themes/theme';

export default function RootLayout({ children, params: { lng } }: any) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
