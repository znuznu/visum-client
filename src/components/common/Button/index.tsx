import React, { PropsWithChildren, ReactEventHandler } from 'react';
import StyledButton from './style';

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
