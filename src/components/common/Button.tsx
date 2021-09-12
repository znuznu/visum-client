import React, { PropsWithChildren, ReactEventHandler } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 22px;
  font-family: 'Oswald';
  text-transform: uppercase;
  width: 120px;
  margin: auto;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  onClick: ReactEventHandler;
  name?: string;
}

const Button = ({ onClick, name, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton onClick={onClick} name={name}>
      {children}
    </StyledButton>
  );
};

export default Button;
