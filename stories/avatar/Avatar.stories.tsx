import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Avatar from '../../src/components/avatar/elements/Avatar';
import { colors } from '../../src/components/theme/elements/theme';

import User from '../../public/assets/user.svg';
import image from '../../public/assets/user.jpg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColour: {
      options: [
        ...Object.keys(colors).filter(
          (el) => el !== 'singleTone' && el !== 'grey' && el !== 'text'
        ),
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'BW',
};

export const Icon: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <User />
  </Avatar>
);

export const Image: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <img src={image} alt="" />
  </Avatar>
);
