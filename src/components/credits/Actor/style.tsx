import styled from 'styled-components';

const StyledName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin: 0 0 1.25rem 0;
`;

export { StyledName };
