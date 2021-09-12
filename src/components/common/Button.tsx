import React, { PropsWithChildren, ReactEventHandler } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts.main};
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
  onClick?: ReactEventHandler;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, name, type, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton type={type} name={name} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
