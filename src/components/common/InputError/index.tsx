import { PropsWithChildren } from 'react';
import StyledError from './style';

const InputError = ({ children }: PropsWithChildren<any>) => {
  return <StyledError>{children}</StyledError>;
};

export default InputError;
