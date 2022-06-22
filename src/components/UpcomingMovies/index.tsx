import { HTTPError } from 'ky';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Page } from 'models/page';
import { TmdbPageMovie } from 'models/tmdb';

import { fetchUpcomingMovies } from 'services/api/tmdb';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport
} from 'components/primitives/ScrollArea';
import ErrorText from 'components/common/ErrorText';
import { NoData } from 'components/common/NoData';
import PosterTooltip from 'components/PosterTooltip';
import Skeleton from 'components/primitives/Skeleton/SkeletonPoster';

import { StyledScrollArea, StyledTitle, StyledUpcomingMovies } from './style';

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
    <>
      <StyledTitle>Upcoming movies</StyledTitle>
      <StyledScrollArea aria-orientation={'horizontal'}>
        <ScrollAreaViewport>
          <StyledUpcomingMovies>
            {isLoading &&
              [...Array(9)].map((_, index) => (
                <Skeleton key={`skeleton-${index}`} variant={'standard'} />
              ))}
            {!isLoading &&
              data?.content.length &&
              data?.content.map((movie: TmdbPageMovie) => (
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
      {!isLoading && !data?.content.length && <NoData>No upcoming films found.</NoData>}
    </>
  );
};

export default UpcomingMovies;
