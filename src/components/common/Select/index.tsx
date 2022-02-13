import { ChangeEventHandler, ReactNode } from 'react';
import { StyledSelect } from './style';

type SelectProps = {
  children: ReactNode;
  onChange?: ChangeEventHandler;
};

export const Select = ({ children, onChange }: SelectProps) => {
  return <StyledSelect onChange={onChange}>{children}</StyledSelect>;
};

export default Select;
