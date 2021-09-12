import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: 'Oswald';
  font-size: 22px;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  margin-bottom: 2rem;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  font-family: 'Oswald';
  color: ${(props) => props.theme.colors.secondary};
  width: auto;
`;

interface InputProps {
  name?: string;
  label: string;
  type: string;
}

const Input = ({ name, label, type, children }: PropsWithChildren<InputProps>) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput name={name} type={type} />
    </>
  );
};

export default Input;
