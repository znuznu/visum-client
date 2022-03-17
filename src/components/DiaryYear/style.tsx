import styled from 'styled-components';

const StyledThead = styled.thead`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.xs};
  text-transform: uppercase;
  text-align: center;

  th {
    padding: 0.5rem 1rem;
  }
`;

export { StyledThead };
