import styled from "styled-components";

import theme from "../styles/themes";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  background: ${theme.colors.blue};
  color: ${theme.colors.heading};  
  height: 54px;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  align-items: center;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`;