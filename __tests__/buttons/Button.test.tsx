import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { defaultTheme } from '../../src/components/theme/elements/theme';
import Button from '../../src/components/buttons/elements/Button';
import renderer from 'react-test-renderer';

describe('Running Test for Button', () => {
  test('it works', () => {
    const { container } = render(<Button>Click</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Danger', () => {
    const button = renderer
      .create(
        <Button filled color="danger">
          Click
        </Button>
      )
      .toJSON();

    expect(button).toHaveStyleRule(
      'background',
      defaultTheme.colors?.danger?.main
    );
  });
});
