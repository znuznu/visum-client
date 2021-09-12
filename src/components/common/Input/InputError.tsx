import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: ${(props) => props.theme.colors.status.error};
  margin: 0;
  font-family: ${(props) => props.theme.fonts.main};
  margin-top: 0.5rem;
`;

const InputError = ({ children }: PropsWithChildren<any>) => {
  return <Error>{children}</Error>;
};

export default InputError;
