import styled from 'styled-components';

const StyledAttribution = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.tertiary};
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

  &:hover {
    color: #90cea1;
    border-bottom: 1px solid #90cea1;
  }
`;

export { StyledAttribution, StyledLink };
