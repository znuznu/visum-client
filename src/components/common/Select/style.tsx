import styled from 'styled-components';

const StyledSelect = styled.select`
  all: revert;
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  padding: 0.2rem;
`;

export { StyledSelect };
