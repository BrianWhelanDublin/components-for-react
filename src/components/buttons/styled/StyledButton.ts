import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';

import { ButtonProps } from '../types/Button.types';

const setColor = (props: ButtonProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;

  let buttonColor = props?.color ?? 'primary';

  let background = props?.filled
    ? (props?.theme?.colors?.[buttonColor]?.main as string)
    : 'inherit';

  let borderColor = props?.theme?.colors?.[buttonColor]?.main;
  let hoverColour = props?.theme?.colors?.[buttonColor]?.dark;
  let color = props?.filled
    ? props.theme?.colors?.singleTone?.lightText
    : props?.theme?.colors?.[buttonColor]?.main;

  styles = css`
    background: ${background};
    border-color: ${borderColor};
    color: ${color};

    &:hover:not([disabled]) {
      background: ${props?.filled ? hoverColour : 'transparent'};
      border-color: ${hoverColour};
    }
  `;

  return styles;
};

const setSize = (props: ButtonProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;
  let padding: string;
  let fontSize: string;

  if (props.size === 'small') {
    fontSize = `${props?.theme?.typography?.fontSize as number}px `;
    padding = '8px 14px ';
  } else if (props.size === 'medium') {
    fontSize = `${(props?.theme?.typography?.fontSize as number) + 2}px `;
    padding = '10px 20px';
  } else {
    fontSize = `${(props?.theme?.typography?.fontSize as number) + 4}px `;
    padding = '12px 28px';
  }

  styles = css`
    padding: ${padding};
    font-size: ${fontSize};
  `;

  return styles;
};

const setRadius = (props: ButtonProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;
  let radius: string;
  if (props?.square) {
    radius = '0';
  } else {
    props?.pill ? (radius = '24px') : (radius = '4px');
  }

  styles = css`
    border-radius: ${radius};
  `;
  return styles;
};

const setShadows = (props: ButtonProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;
  let shadow: string = 'none';
  if (props.shadow) {
    const shadowObject = props?.theme?.shadows?.[props.shadow];
    shadow = `${shadowObject?.shadowOffset?.x}px ${shadowObject?.shadowOffset?.x}px ${shadowObject?.shadowRadius}px ${shadowObject?.shadowColor}`;
  }

  styles = css`
    box-shadow: ${shadow};
  `;

  return styles;
};

export const StyledButton = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type || 'button',
}))<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props?.borderLess ? 'none' : '1px solid transparent')};
  margin: 0;
  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  margin: 0;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? '100%' : '')};
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${(props) => props?.theme?.typography?.fontFamily};
  font-weight: ${(props) => props?.theme?.typography?.fontWeightMedium};

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
    background: ${(props) => props?.theme?.colors?.grey?.[50]};
    color: ${(props) => props?.theme?.colors?.text?.disabled};
    border: ${(props) => props?.theme?.colors?.text?.disabled};
  }

  ${(props) => setSize(props)}
  ${(props) => setColor(props)}
  ${(props) => setRadius(props)}
  ${(props) => setShadows(props)}
`;
