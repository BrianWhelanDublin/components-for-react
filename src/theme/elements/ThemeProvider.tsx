import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LibraryDefaultTheme } from '../types/theme.types';
import { defaultTheme } from './theme';

interface ComponentsThemeProviderProps {
  theme: LibraryDefaultTheme;
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
