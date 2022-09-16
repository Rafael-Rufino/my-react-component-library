import React from 'react';

import { HeadingProps } from './interface';

import {Title, Wrapper, Description} from './styles';

export const Heading = ({children, fontSize, textAlign, description}: HeadingProps) => {
  return (
    <Wrapper textAlign={textAlign}>
      <Title fontSize={fontSize}>{children}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}