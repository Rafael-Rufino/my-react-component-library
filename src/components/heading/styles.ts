
import styled from 'styled-components';

import themes from '../styles/themes';

import { HeadingProps } from './interface';

const handleTextAlign = ({ textAlign }: HeadingProps) => {
  switch (textAlign) {
  case 'right':
    return 'right';
  case 'left':
    return 'left';
  default:
    return 'center';
 }
};

export const Wrapper = styled.div<HeadingProps>`
  position: relative;
  width: 100%;
  text-align: ${handleTextAlign};
`;

export const Title = styled.h1<HeadingProps>`
  color: ${themes.colors.text};
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  line-height: 120%;
`;

export const  Description = styled.p`
  font-size: 1rem;
  line-height: 120%;
  color: ${themes.colors.gray300};
`;