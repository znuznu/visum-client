import React, { PropsWithChildren, ReactEventHandler } from 'react';
import StyledButton, { ButtonStyleProps } from './style';

interface ButtonProps extends ButtonStyleProps {
  onClick?: ReactEventHandler;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  onClick,
  name,
  type,
  children,
  margin,
  padding,
  border,
  borderRadius,
  width,
  height,
  cursor,
  position,
  top,
  bottom,
  left,
  right
}: PropsWithChildren<ButtonProps>) => {
  const styleProps: ButtonStyleProps = {
    margin,
    padding,
    border,
    borderRadius,
    width,
    height,
    cursor,
    position,
    top,
    bottom,
    left,
    right
  };

  return (
    <StyledButton type={type} name={name} onClick={onClick} {...styleProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
