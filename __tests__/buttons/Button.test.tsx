import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { defaultTheme } from '../../src/components/theme/elements/theme';
import Button from '../../src/components/buttons/elements/Button';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ButtonProps } from '../../src/components/buttons/types/Button.types';

const TestButton: React.FC<ButtonProps> = (props) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...props}>Click</Button>
  </ThemeProvider>
);

describe('Running Test for Button', () => {
  test('Button  Renders', () => {
    const { container } = render(<TestButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Filled Button', () => {
    const button = renderer.create(<TestButton filled />).toJSON();
    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.primary?.main
    );
  });

  test('Pill Button', () => {
    const button = renderer.create(<TestButton pill />).toJSON();
    expect(button).toHaveStyleRule('border-radius', '24px');
  });

  test('Boarderless Button', () => {
    const button = renderer.create(<TestButton borderLess />).toJSON();
    expect(button).toHaveStyleRule('border', 'none');
  });

  test('Square Button', () => {
    const button = renderer.create(<TestButton square />).toJSON();
    expect(button).toHaveStyleRule('border-radius', '0');
  });

  test('Fullwith Button', () => {
    const button = renderer.create(<TestButton fullWidth />).toJSON();
    expect(button).toHaveStyleRule('width', '100%');
  });

  test('Small Button', () => {
    const button = renderer.create(<TestButton size="small" />).toJSON();
    expect(button).toHaveStyleRule('padding', '8px 14px');
  });

  test('Medium Button', () => {
    const button = renderer.create(<TestButton size="medium" />).toJSON();
    expect(button).toHaveStyleRule('padding', '10px 20px');
  });

  test('Large Button', () => {
    const button = renderer.create(<TestButton size="large" />).toJSON();
    expect(button).toHaveStyleRule('padding', '12px 28px');
  });

  test('Primary Button', () => {
    const button = renderer
      .create(<TestButton filled color="primary" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.primary?.main
    );
  });

  test('Secondary Button', () => {
    const button = renderer
      .create(<TestButton filled color="secondary" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.secondary?.main
    );
  });

  test('Tertiary Button', () => {
    const button = renderer
      .create(<TestButton filled color="tertiary" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.tertiary?.main
    );
  });

  test('Info Button', () => {
    const button = renderer.create(<TestButton filled color="info" />).toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.info?.main
    );
  });

  test('Success Button', () => {
    const button = renderer
      .create(<TestButton filled color="success" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.success?.main
    );
  });

  test('Warning Button', () => {
    const button = renderer
      .create(<TestButton filled color="warning" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.warning?.main
    );
  });

  test('Shadow Button', () => {
    const shadowObject = defaultTheme.shadows?.['1'];
    const shadow = `${shadowObject?.shadowOffset?.x}px ${shadowObject?.shadowOffset?.x}px ${shadowObject?.shadowRadius}px ${shadowObject?.shadowColor}`;
    const button = renderer.create(<TestButton shadow="1" />).toJSON();

    expect(button).toHaveStyleRule('box-shadow', shadow);
  });

  test('Warning Button', () => {
    const button = renderer
      .create(<TestButton filled color="warning" />)
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.warning?.main
    );
  });
});
