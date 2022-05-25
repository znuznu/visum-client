import { HTTPError } from 'ky';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Page } from '../../models/page';
import { TmdbPageMovie } from '../../models/tmdb';
import { fetchUpcomingMovies } from '../../services/api/tmdb';
import { Flex } from '../common/Flex';
import {
  ScrollAreaThumb,
  ScrollAreaScrollbar,
  ScrollAreaViewport
} from '../common/ScrollArea';
import ErrorText from '../ErrorText';
import { NoData } from '../NoData';
import PosterTooltip from '../PosterTooltip';
import { StyledTitle, StyledUpcomingMovies, StyledScrollArea } from './style';

const UpcomingMovies = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page] = useState<Page<TmdbPageMovie>>({
    current: 1,
    size: 20,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    content: []
  });
  const [pageNumber] = useState(1);

  const { isLoading, isError, data } = useQuery(
    ['getTmdbUpcomingMovies', page.current],
    () => fetchUpcomingMovies({ authorization: `Bearer ${jwtToken}` }, pageNumber),
    {
      onError: (error: HTTPError) => {
        // TODO error
        setHttpError(error);
      },
      retry: false,
      keepPreviousData: true
    }
  );

  if (isError) {
    return <ErrorText />;
  }

  return (
    <Flex flexDirection={'column'}>
      <StyledTitle>Upcoming movies</StyledTitle>
      {isLoading && <p>Loading</p>}
      {data?.content.length ? (
        <StyledScrollArea aria-orientation={'horizontal'}>
          <ScrollAreaViewport>
            <StyledUpcomingMovies>
              {data?.content.map((movie: TmdbPageMovie) => (
                <Link to={`/tmdb/film/${movie.tmdbId}`} key={`tmdb-film-${movie.tmdbId}`}>
                  <PosterTooltip width={'100px'} height={'150px'} movie={movie} />
                </Link>
              ))}
            </StyledUpcomingMovies>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaScrollbar orientation={'horizontal'}>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </StyledScrollArea>
      ) : !isLoading ? (
        <NoData>No upcoming films found.</NoData>
      ) : null}
    </Flex>
  );
};

export default UpcomingMovies;
