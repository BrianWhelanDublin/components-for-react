import { HTMLAttributes } from 'react';

import { Color } from '../../theme/types/theme';

export const SIZE = ['x-small', 'small', 'medium', 'large', 'x-large'] as const;

export interface AvatarProps extends HTMLAttributes<HTMLElement> {
  /** size changes the button size to extra-small, small, medium, large or extra-large */
  size?: typeof SIZE[number];

  /** type changes the avatar from round to square with rounded edges */
  type?: 'round' | 'square';

  /** status shows if the user is away or active */
  status?: 'away' | 'active';

  /** backgroundColour pick the background colour if there is no image */
  backgroundColour?: Color;

  /** children sets the avatar content will work with an icon, initials or an image */
  children?: React.ReactElement;
}
