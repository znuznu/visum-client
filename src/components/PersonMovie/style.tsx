import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPersonMovie = styled.div`
  display: flex;
`;

const StyledMovieTitle = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: bold;
  margin: 0;
`;

const StyledReleaseDate = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: auto 0 auto 0.5rem;
`;

export { StyledPersonMovie, StyledMovieTitle, StyledReleaseDate };
