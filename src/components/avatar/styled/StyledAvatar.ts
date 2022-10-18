import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
import { AvatarProps } from '../types/Avatar.types';

const setColor = (props: AvatarProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;

  const backgroundColour = props.backgroundColour ?? 'primary';
  const background = props?.theme?.colors?.[backgroundColour]?.main;

  styles = css`
    background: ${background};
  `;

  return styles;
};

const setSize = (props: AvatarProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenSimpleInterpolation;
  let measure: string;
  let lineHeight: string;
  let fontSize: string;
  let radius: string;
  let svgSize: number;

  switch (props.size) {
    case 'x-small':
      measure = '28px';
      fontSize = '12px';
      lineHeight = '14px';
      radius = '4px';
      svgSize = 0.7;
      break;
    case 'small':
      measure = '36px';
      fontSize = '14px';
      lineHeight = '24px';
      radius = '4px';
      svgSize = 0.8;
      break;
    case 'medium':
      measure = '44px';
      fontSize = '16px';
      lineHeight = '28px';
      radius = '8px';
      svgSize = 1;
      break;
    case 'large':
      measure = '64px';
      fontSize = '24px';
      lineHeight = '40px';
      radius = '16px';
      svgSize = 1.1;
      break;
    case 'x-large':
      measure = '80px';
      fontSize = '32px';
      lineHeight = '44px';
      radius = '24px';
      svgSize = 1.2;
      break;
    default:
      measure = '40px';
      fontSize = '20px';
      lineHeight = '28px';
      radius = '8px';
      svgSize = 1;
  }
  styles = css`
    height: ${measure};
    width: ${measure};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    border-radius: ${props?.type === 'round' ? '50%' : radius};

    && > img {
      border-radius: ${props?.type === 'round' ? '50%' : radius};
    }

    && > svg {
      transform: scale(${svgSize});
    }
  `;

  return styles;
};

const setStatus = (props: AvatarProps & ThemeProps<DefaultTheme>) => {
  let styles: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  const statusColor =
    props?.status === 'active'
      ? props.theme.colors?.success?.main
      : props.theme.colors?.error?.main;

  styles = css`
    &::after {
      content: '';
      position: absolute;
      top: ${props.type === 'round' ? '5%' : 0};
      right: ${props.type === 'round' ? '7%' : 0};
      border: 1px solid ${(props) => props?.theme?.colors?.singleTone?.white};
      background: ${statusColor};
      border-radius: 50%;
      height: 14%;
      width: 14%;
      box-shadow: 0 0 1px rgba(0, 0, 0, 1);
    }
  `;

  return styles;
};

export const StyledAvatar = styled.figure<AvatarProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: ${(props) => props?.theme?.typography?.fontFamily};
  color: ${(props) => props?.theme?.colors?.singleTone?.white};

  /* border-radius: ${(props) => (props.type === 'round' ? '50%' : '16px')}; */

  && > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  && > svg {
    transition: all 0.2s ease-in-out;
  }

  ${(props) => (props?.status ? setStatus(props) : '')}
  ${(props) => setColor(props)};
  ${(props) => setSize(props)};
`;
