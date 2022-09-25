import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import merge from 'deepmerge';

interface ComponentsThemeProviderProps {
  theme: DefaultTheme;
  children?: React.ReactNode;
}

const ComponentsThemeProvider: React.FC<ComponentsThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={merge(defaultTheme, theme)}>{children}</ThemeProvider>
  );
};

export default ComponentsThemeProvider;
