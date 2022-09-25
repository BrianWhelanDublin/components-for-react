import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '../../src/components/buttons/elements/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Click Me',
};

// export const Secondary = Template.bind({});

// Secondary.args = {
//   children: 'Click Me',
//   varient: 'secondary',
// };

// export const Tertiary = Template.bind({});

// Tertiary.args = {
//   children: 'Click Me',
//   varient: 'tertiary',
// };

// export const FunctionButton = Template.bind({});

// FunctionButton.args = {
//   children: 'Function Button',
//   onClick: () => alert('Hello'),
// };

// export const LinkedButton = Template.bind({});
// LinkedButton.args = {
//   children: 'Linked Button',
//   href: '/',
// };
