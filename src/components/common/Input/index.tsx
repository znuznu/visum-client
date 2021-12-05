import React, { ReactEventHandler } from 'react';
import InputError from '../InputError';
import { InputBlock, StyledInput, StyledLabel } from './style';

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
