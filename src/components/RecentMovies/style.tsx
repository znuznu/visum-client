import styled from 'styled-components';

const StyledRecentMovies = styled.div``;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
`;

const StyledMovieGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, 150px [col-start]);
  padding: 0;
`;

export { StyledTitle, StyledRecentMovies, StyledMovieGrid };
