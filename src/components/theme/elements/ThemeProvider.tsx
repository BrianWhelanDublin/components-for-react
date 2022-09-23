import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

interface ComponentsThemeProviderProps {
  theme: DefaultTheme;
  children?: React.ReactNode;
}

const ComponentsThemeProvider: React.FC<ComponentsThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={Object.assign({}, defaultTheme, theme)}>
      {children}
    </ThemeProvider>
  );
};

export default ComponentsThemeProvider;
