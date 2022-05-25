import { ChangeEventHandler, FocusEventHandler, ReactEventHandler } from 'react';
import InputError from 'components/common/InputError';
import { InputStyleProps, StyledTextArea } from './style';

interface TextAreaProps extends InputStyleProps {
  id: string;
  label?: string;
  value?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  onInput?: ReactEventHandler;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
}

const TextArea = ({
  id,
  value,
  name,
  error,
  placeholder,
  onInput,
  margin,
  onChange,
  onBlur
}: TextAreaProps) => {
  return (
    <>
      <StyledTextArea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        margin={margin}
        rows={15}
        onInput={onInput}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <InputError>{error}</InputError> : null}
    </>
  );
};

export default TextArea;
