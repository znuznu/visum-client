import styled from 'styled-components';
import { StyledScrollArea } from '../common/ScrollArea/style';

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
  margin: 1rem 0;
`;

const StyledUpcomingMoviesScrollArea = styled(StyledScrollArea)`
  width: auto;
  height: 100%;
`;

const StyledUpcomingMovies = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export {
  StyledTitle,
  StyledUpcomingMoviesScrollArea as StyledScrollArea,
  StyledUpcomingMovies
};
