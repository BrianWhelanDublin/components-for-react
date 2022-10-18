import React, { forwardRef } from 'react';
import { StyledAvatar } from '../styled/StyledAvatar';
import { AvatarProps } from '../types/Avatar.types';

const Avatar = forwardRef<HTMLElement, AvatarProps>(
  ({ children, size = 'medium', type = 'round', ...props }, ref) => {
    return (
      <StyledAvatar ref={ref} type={type} size={size} {...props}>
        {children}
      </StyledAvatar>
    );
  }
);

export default Avatar;
