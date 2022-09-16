import React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";

 const Button = ({
  children,
  type,
  onClick,
  ...rest
}: IProps) => {
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};

export { Button };