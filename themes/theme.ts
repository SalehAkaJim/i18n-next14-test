'use client';
import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: {
  light: ThemeOptions;
  dark: ThemeOptions;
  pink: ThemeOptions;
} = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Lato',
      fontSize: 14,
    },
    spacing: 8,
    shape: {
      borderRadius: 24,
    },
  },

  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Lato',
      fontSize: 14,
    },
    spacing: 8,
    shape: {
      borderRadius: 24,
    },
  },

  pink: {
    palette: {
      mode: 'light',
      background: {
        default: '#fcf7f7',
        paper: '#fbf3f3',
      },
      primary: {
        main: '#ff7fbf',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Lato',
      fontSize: 14,
    },
    spacing: 8,
    shape: {
      borderRadius: 24,
    },
  },
};

export const lightTheme = createTheme(themeOptions.light);
export const darkTheme = createTheme(themeOptions.dark);
export const pinkTheme = createTheme(themeOptions.pink);
