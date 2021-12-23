import styled from 'styled-components';

const StyledRecentMovies = styled.div``;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
`;

export { StyledTitle, StyledRecentMovies };
