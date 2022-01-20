import React, { ChangeEventHandler, FocusEventHandler, ReactEventHandler } from 'react';
import InputError from '../InputError';
import { InputBlock, InputStyleProps, StyledInput, StyledLabel } from './style';

interface InputProps extends InputStyleProps {
  id: string;
  label?: string;
  type: string;
  value?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onInput?: ReactEventHandler;
  onBlur?: FocusEventHandler;
  min?: number;
  max?: number;
}

const Input = ({
  id,
  name,
  label,
  type,
  value,
  error,
  placeholder,
  onChange,
  onBlur,
  onInput,
  margin,
  min,
  max
}: InputProps) => {
  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputBlock margin={margin}>
        <StyledInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onInput={onInput}
          min={min}
          max={max}
        />
        {error ? <InputError>{error}</InputError> : null}
      </InputBlock>
    </>
  );
};

export default Input;
