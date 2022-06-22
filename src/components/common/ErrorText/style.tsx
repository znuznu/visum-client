import styled from 'styled-components';

const StyledErrorText = styled.p`
  color: ${(props) => props.theme.colors.status.error};
  font-style: italic;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 1rem 0;
`;

export { StyledErrorText };
