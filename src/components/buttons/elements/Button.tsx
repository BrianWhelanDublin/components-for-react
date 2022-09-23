import React from 'react';
import { forwardRef } from 'react';
import { StyledButton } from '../styled/StyledButton';
import { ButtonProps } from '../types/Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
