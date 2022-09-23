import { ButtonHTMLAttributes } from 'react';

export const SIZE = ['small', 'medium', 'large'] as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;
  filled?: boolean;
  pill?: boolean;
  fullWidth?: boolean;
  size?: typeof SIZE[number];
  varient?: 'primary' | 'secondary' | 'tertiary';
}

export interface ButtonExtraProps {
  danger?: boolean;
  filled?: boolean;
  pill?: boolean;
  fullWidth?: boolean;
  size?: typeof SIZE[number];
  varient?: 'primary' | 'secondary' | 'tertiary';
}
