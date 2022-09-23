export interface ThemeColor {
  light?: string;
  main?: string;
  dark?: string;
}

export interface ThemeSingleTone {
  white?: string;
  black?: string;
  lightText?: string;
  darkText?: string;
}

export interface ThemeGrey {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ThemeGrey {
  disabled?: string;
  secondary?: string;
  primary?: string;
}

export interface ThemeTextColor {
  disabled?: string;
  secondary?: string;
  primary?: string;
}

export interface ThemeColors {
  primary?: ThemeColor;
  secondary?: ThemeColor;
  tertiary?: ThemeColor;
  info?: ThemeColor;
  success?: ThemeColor;
  error?: ThemeColor;
  danger?: ThemeColor;
  warning?: ThemeColor;
  singleTone?: ThemeSingleTone;
  grey?: ThemeGrey;
  text?: ThemeTextColor;
}

export interface ThemeTypography {
  htmlFontSize?: number;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  fontFamily?: string;
}

export interface ThemeOpacity {
  0?: number;
  5?: number;
  10?: number;
  20?: number;
  25?: number;
  30?: number;
  40?: number;
  50?: number;
  60?: number;
  70?: number;
  75?: number;
  80?: number;
  90?: number;
  95?: number;
  100?: number;
}

export interface ThemeShadowOffset {
  width?: number;
  height?: number;
}

export interface ThemeShadow {
  shadowColor?: string;
  shadowOffset?: ThemeShadowOffset;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}

export interface ThemeShadows {
  0?: ThemeShadow;
  1?: ThemeShadow;
  2?: ThemeShadow;
  3?: ThemeShadow;
  4?: ThemeShadow;
  5?: ThemeShadow;
  6?: ThemeShadow;
  7?: ThemeShadow;
  8?: ThemeShadow;
  9?: ThemeShadow;
}

export interface LibraryDefaultTheme {
  colors?: ThemeColors;
  typography?: ThemeTypography;
  opacity?: ThemeOpacity;
  shadows?: ThemeShadows;
}
