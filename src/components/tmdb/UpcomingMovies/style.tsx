import styled from 'styled-components';

import { StyledScrollArea } from 'components/primitives/ScrollArea/style';

const StyledUpcomingMoviesScrollArea = styled(StyledScrollArea)`
  height: 100%;
`;

const StyledUpcomingMovies = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export { StyledUpcomingMoviesScrollArea as StyledScrollArea, StyledUpcomingMovies };
