import styled from 'styled-components';

const StyledTmdbFilm = styled.div`
  display: flex;
  margin: 1rem 0;

  max-width: ${({ theme }) => theme.breakpoints.s};
`;

export { StyledTmdbFilm };
