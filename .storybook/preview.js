import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/components/theme/elements/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
];
