import styled from 'styled-components';

const StyledPaginator = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
`;

const StyledPageSize = styled.div`
  margin: auto 1.5rem auto auto;
`;

const StyledRangeLabel = styled.div`
  margin: auto 1.5rem;
`;

export { StyledPaginator, StyledPageSize, StyledRangeLabel };
