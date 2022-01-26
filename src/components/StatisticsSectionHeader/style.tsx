import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
  margin: auto 0.5rem auto 0;
  padding: 0;
`;

export { StyledTitle };
