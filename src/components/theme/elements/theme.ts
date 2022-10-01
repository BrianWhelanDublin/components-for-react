import { DefaultTheme } from 'styled-components';
import {
  ThemeColors,
  ThemeOpacity,
  ThemeShadows,
  ThemeTypography,
} from '../types/theme';

export const colors: ThemeColors = {
  primary: {
    light: '#5f5fc4',
    main: '#283593',
    dark: '#001064',
  },
  secondary: {
    light: '#F9A8D4',
    main: '#DB2777',
    dark: '#831843',
  },
  tertiary: {
    light: '#6EE7B7',
    main: '#059669',
    dark: '#064E3B',
  },
  info: {
    light: '#7dd3fc',
    main: '#0284c7',
    dark: '#0c4a6e',
  },
  success: {
    light: '#86efac',
    main: '#16a34a',
    dark: '#14532d',
  },
  error: {
    light: '#fca5a5',
    main: '#dc2626',
    dark: '#7f1d1d',
  },

  warning: {
    light: '#fdba74',
    main: '#ea580c',
    dark: '#7c2d12',
  },
  singleTone: {
    white: '#ffffff',
    black: '#000000',
    lightText: '#ffffff',
    darkText: '#27272a',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  text: {
    disabled: '#d4d4d4',
    secondary: '#525252',
    primary: '#171717',
  },
};

export const typography: ThemeTypography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontFamily: 'Helvetica',
};

export const opacity: ThemeOpacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

export const shadows: ThemeShadows = {
  0: {
    shadowColor: 'rgba(0,0,0,.18)',
    shadowOffset: {
      x: 1,
      y: 1,
    },
    shadowRadius: 1,
  },
  1: {
    shadowColor: 'rgba(0,0,0,.2)',
    shadowOffset: {
      x: 1,
      y: 2,
    },
    shadowRadius: 2,
  },
  2: {
    shadowColor: 'rgba(0,0,0,.22)',
    shadowOffset: {
      x: 2,
      y: 2,
    },
    shadowRadius: 4,
  },
  3: {
    shadowColor: 'rgba(0,0,0,.23)',
    shadowOffset: {
      x: 3,
      y: 6,
    },
    shadowRadius: 6,
  },
  4: {
    shadowColor: 'rgba(0,0,0,.25)',
    shadowOffset: {
      x: 4,
      y: 8,
    },
    shadowRadius: 8,
  },
  5: {
    shadowColor: 'rgba(0,0,0,.27)',
    shadowOffset: {
      x: 5,
      y: 10,
    },
    shadowRadius: 10,
  },
  6: {
    shadowColor: 'rgba(0,0,0,.29)',
    shadowOffset: {
      x: 6,
      y: 12,
    },
    shadowRadius: 12,
  },
  7: {
    shadowColor: 'rgba(0,0,0,.3)',
    shadowOffset: {
      x: 7,
      y: 14,
    },
    shadowRadius: 14,
  },
  8: {
    shadowColor: 'rgba(0,0,0,.32)',
    shadowOffset: {
      x: 8,
      y: 16,
    },
    shadowRadius: 16,
  },
  9: {
    shadowColor: 'rgba(0,0,0,.34)',
    shadowOffset: {
      x: 9,
      y: 18,
    },
    shadowRadius: 18,
  },
};

export const defaultTheme: DefaultTheme = {
  colors,
  typography,
  opacity,
  shadows,
};
