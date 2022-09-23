import {
  LibraryDefaultTheme,
  ThemeColors,
  ThemeOpacity,
  ThemeShadows,
  ThemeTypography,
} from '../types/theme.types';

export const colors: ThemeColors = {
  primary: {
    light: '#67E8F9',
    main: '#0891B2',
    dark: '#164E63',
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
  danger: {
    light: '#fda4af',
    main: '#e11d48',
    dark: '#881337',
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
    800: '##262626',
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
  fontFamily: 'inherit',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  6: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  7: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  8: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  9: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
};

export const defaultTheme: LibraryDefaultTheme = {
  colors,
  typography,
  opacity,
  shadows,
};
