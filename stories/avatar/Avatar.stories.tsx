import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Avatar from '../../src/components/avatar/elements/Avatar';
import { colors } from '../../src/components/theme/elements/theme';
import { Color } from '../../src/components/theme/types/theme';
import { SIZE } from '../../src/components/avatar/types/Avatar.types';

import User from '../../public/assets/user.svg';
import image from '../../public/assets/user.jpg';
import mdx from './Avatar.mdx';

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
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'BW',
};

export const Icon: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Avatar {...args}>
      <User />
    </Avatar>
    <Avatar type="square" {...args}>
      <User />
    </Avatar>
    <Avatar status="away" {...args}>
      <User />
    </Avatar>
    <Avatar type="square" status="active" {...args}>
      <User />
    </Avatar>
  </>
);

export const Image: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Avatar {...args}>
      <img src={image} alt="" />
    </Avatar>
    <Avatar type="square" {...args}>
      <img src={image} alt="" />
    </Avatar>
    <Avatar status="away" {...args}>
      <img src={image} alt="" />
    </Avatar>
    <Avatar type="square" status="active" {...args}>
      <img src={image} alt="" />
    </Avatar>
  </>
);

export const Colors: ComponentStory<typeof Avatar> = (args) => (
  <>
    {Object.keys(colors).map((el) => (
      <Avatar key={`avatar-${el}`} backgroundColour={el as Color}>
        <span>BW</span>
      </Avatar>
    ))}
  </>
);

export const Sizes: ComponentStory<typeof Avatar> = (args) => (
  <>
    {SIZE.map((el) => (
      <Avatar key={`avatar-${el}`} size={el}>
        <span>BW</span>
      </Avatar>
    ))}
  </>
);
