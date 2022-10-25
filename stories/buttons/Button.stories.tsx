import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '../../src/components/buttons/elements/Button';
import { ButtonProps } from '../../src/components/buttons/types/Button.types';
import { Color } from '../../src/components/theme/types/theme';
import { colors } from '../../src/components/theme/elements/theme';
import { SIZE } from '../../src/components/buttons/types/Button.types';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: [
        ...Object.keys(colors).filter(
          (el) => el !== 'singleTone' && el !== 'grey' && el !== 'text'
        ),
      ],
      control: { type: 'select' },
    },
  },

  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click Me',
};

export const Square = Template.bind({});

Square.args = {
  children: 'Button',
  square: true,
};

export const Pill = Template.bind({});

Pill.args = {
  children: 'Click Me',
  pill: true,
};

export const Filled = Template.bind({});

Filled.args = {
  children: 'Click Me',
  filled: true,
};

export const Disabled: ComponentStory<typeof Button> = (args) => (
  <Button disabled square>
    Click Me
  </Button>
);

export const Sizes: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      {SIZE.map((el) => (
        <React.Fragment key={`button-${el}`}>
          <Button size={el} {...args}>
            Click Me
          </Button>
          &nbsp; &nbsp;
        </React.Fragment>
      ))}
    </>
  );
};

interface ButtonRowProps {
  args: ButtonProps;
  text: string;
  color?: Color;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ args, text, color }) => {
  return (
    <>
      <Button color={color} {...args}>
        {text}
      </Button>

      <Button color={color} filled {...args}>
        {text}
      </Button>

      <Button color={color} square {...args}>
        {text}
      </Button>

      <Button color={color} square filled {...args}>
        {text}
      </Button>

      <Button color={color} pill {...args}>
        {text}
      </Button>

      <Button color={color} pill filled {...args}>
        {text}
      </Button>
    </>
  );
};

export const Colors: ComponentStory<typeof Button> = (args) => {
  const buttonColors = Object.keys(colors).filter(
    (el) => el !== 'singleTone' && el !== 'grey' && el !== 'text'
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 100px)',
        gap: '20px',
      }}
    >
      {buttonColors.map((el) => (
        <ButtonRow
          key={`button-${el}`}
          color={el as Color}
          text={el}
          args={args}
        />
      ))}
    </div>
  );
};

Colors.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
