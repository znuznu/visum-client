import React from 'react';

import { StyledErrorText } from './style';

const DEFAULT_TEXT = 'Something wrent wrong. Please reload.';

const ErrorText = () => {
  return <StyledErrorText>{DEFAULT_TEXT}</StyledErrorText>;
};

export default ErrorText;
