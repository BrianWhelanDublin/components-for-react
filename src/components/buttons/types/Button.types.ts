import React, { ButtonHTMLAttributes } from 'react';

import { Color } from '../../theme/types/theme';

export const SIZE = ['small', 'medium', 'large'] as const;
export const SHADOW = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

/**
 * Button properties.
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** filled adds a solid background to the button */
  filled?: boolean;

  /** pill gives the button a more rounded appearance */
  pill?: boolean;

  /** borderless removes the button borders */
  borderLess?: boolean;

  /** square gives the butoon squared edges */
  square?: boolean;

  /** full width gives the button a width of 100% of its container */
  fullWidth?: boolean;

  /** size changes the button size to small medium or large */
  size?: typeof SIZE[number];

  /** children Specify the content of your Button */
  children?: React.ReactNode;

  /** colour the button colour can be changed to the differen theme colours. The buuton will use the colours main shade
   *  for background and border and the colours dark shade for hover */

  color?: Color;

  /** shadow gives the button a raised appearance */

  shadow?: typeof SHADOW[number];
}
