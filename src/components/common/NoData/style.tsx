import styled from 'styled-components';

const StyledNoData = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-style: italic;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0;
`;

export { StyledNoData };
