import React, { ReactEventHandler } from 'react';
import styled from 'styled-components';
import InputError from './InputError';

const StyledLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 22px;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.secondary};
  width: auto;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

interface InputProps {
  id: string;
  label: string;
  type: string;
  value?: string;
  name?: string;
  error?: string;
  onChange: ReactEventHandler;
  onBlur: ReactEventHandler;
}

const Input = ({ id, name, label, type, value, error, onChange, onBlur }: InputProps) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <InputBlock>
        <StyledInput
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error ? <InputError>{error}</InputError> : null}
      </InputBlock>
    </>
  );
};

export default Input;
